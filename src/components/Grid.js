export const Grid = ({ children, gap = '20px' }) => {
  return (
    <div style={{ display: 'flex', 'flex-wrap': 'wrap', gap }} >
      {children.map((child, index) => (
        <div key={index} style={{ width: `calc(50% - ${gap})` }} >
          {child}
        </div>
      ))}
    </div>
  )
}
