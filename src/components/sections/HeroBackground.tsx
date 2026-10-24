interface HeroBackgroundProps {
  className?: string
}

interface Node {
  cx: number
  cy: number
}

const NODES: Node[] = [
  { cx: 40, cy: 60 },
  { cx: 160, cy: 30 },
  { cx: 280, cy: 70 },
  { cx: 380, cy: 40 },
  { cx: 480, cy: 90 },
]

const EDGES: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
]

export function HeroBackground({ className = '' }: HeroBackgroundProps) {
  return (
    <div aria-hidden="true" className={`overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 animate-fade-in motion-reduce:animate-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(circle at 50% 35%, black, transparent 72%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 35%, black, transparent 72%)',
        }}
      />
      <svg
        viewBox="0 0 520 120"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-x-0 top-0 h-full w-full text-border-strong opacity-70"
      >
        {EDGES.map(([from, to], index) => {
          const a = NODES[from]
          const b = NODES[to]
          return (
            <line
              key={`edge-${index}`}
              x1={a.cx}
              y1={a.cy}
              x2={b.cx}
              y2={b.cy}
              stroke="currentColor"
              strokeWidth={1}
              strokeDasharray="6 6"
              className="animate-dash-flow motion-reduce:animate-none"
            />
          )
        })}
        {NODES.map((node, index) => (
          <circle
            key={`node-${index}`}
            cx={node.cx}
            cy={node.cy}
            r={4}
            fill="currentColor"
            className="text-accent animate-pulse-slow motion-reduce:animate-none"
            style={{ animationDelay: `${index * 300}ms` }}
          />
        ))}
      </svg>
    </div>
  )
}
