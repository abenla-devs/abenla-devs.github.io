import React, { useEffect, useRef } from 'react'

// Lazy-load to avoid SSR issues
const loadMarkmap = async () => {
  const { Markmap } = await import('markmap-view')
  const { Transformer } = await import('markmap-lib')
  return { Markmap, Transformer }
}

interface Props {
  content: string
  height?: string | number
  initialExpandLevel?: number | string
}

export default function MarkmapComponent({ content, height = 400, initialExpandLevel }: Props) {
  const svgRef = useRef<SVGSVGElement | null>(null)

  useEffect(() => {
    let disposed = false
    let mm: any

    const render = async () => {
      if (!svgRef.current) return
      const cleanContent = (content ?? '').trim()
      if (!cleanContent) return

      try {
        const { Markmap, Transformer } = await loadMarkmap()
        const transformer = new Transformer()
        const { root } = transformer.transform(cleanContent)

        // clear trước khi render lại
        svgRef.current.innerHTML = ''
        if (disposed) return

        const level =
          initialExpandLevel === undefined || initialExpandLevel === null
            ? undefined
            : Number(initialExpandLevel)
        const options = Number.isFinite(level) ? { initialExpandLevel: level as number } : {}
        mm = Markmap.create(svgRef.current, options as any, root)
        setTimeout(() => mm?.fit?.(), 50)
      } catch (err) {
        if (svgRef.current) {
          svgRef.current.innerHTML = '<text x="10" y="20" fill="red">Failed to render markmap</text>'
        }
        // eslint-disable-next-line no-console
        console.error('Markmap render error:', err)
      }
    }

    render()

    return () => {
      disposed = true
      if (svgRef.current) svgRef.current.innerHTML = ''
      mm = null
    }
  }, [content])

  const computedHeight =
    height === undefined ? undefined : typeof height === 'number' ? `${height}px` : height

  return (
    <svg
      ref={svgRef}
      style={{ width: '100%', height: computedHeight, display: 'block' }}
    />
  )
}


