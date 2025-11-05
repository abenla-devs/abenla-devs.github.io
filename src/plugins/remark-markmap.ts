import { Plugin } from 'unified'
import { visit } from 'unist-util-visit'
import type { Code, Parent } from 'mdast'

// Transform ```markmap code fences into <BrowserOnly><MarkmapComponent content={...}/></BrowserOnly>
const remarkMarkmap: Plugin = () => {
  return (tree) => {
    visit(tree, 'code', (node: Code, index: number, parent: Parent | undefined) => {
      if (!parent || node.lang !== 'markmap') return

      // Dùng literal string cho thuộc tính MDX để trình biên dịch MDX tự escape
      const contentLiteral = node.value

      // Parse meta to allow options like: ```markmap initialExpandLevel=2
      const extraAttrs: any[] = []
      const meta = (node as any).meta as string | undefined
      if (meta) {
        const re = /(\w+)=([^\s]+)/g
        let m: RegExpExecArray | null
        while ((m = re.exec(meta))) {
          const key = m[1]
          const raw = m[2]
          extraAttrs.push({
            type: 'mdxJsxAttribute',
            name: key,
            // Luôn để literal string; component sẽ tự parse số
            value: raw,
          })
        }
      }

      // Build MDX tree using mdxJsx* nodes to be compatible with MDX parsing
      const markmapEl: any = {
        type: 'mdxJsxFlowElement',
        name: 'MarkmapComponent',
        attributes: [
          {
            type: 'mdxJsxAttribute',
            name: 'content',
            value: contentLiteral,
          },
          ...extraAttrs,
        ],
        children: [],
      }

      parent.children[index] = markmapEl
    })

    return tree
  }
}

export default remarkMarkmap


