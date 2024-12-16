interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  as?: "section" | "div"
  wrapperClassName?: string
  innerClassName?: string
}

export function Container({ 
  children, 
  className = "", 
  wrapperClassName = "",
  innerClassName = "",
  as: Component = "div",
  ...props 
}: ContainerProps) {
  return (
    <Component 
      className={`w-full ${wrapperClassName} ${className}`} 
      {...props}
    >
      <div className={`mx-auto max-w-[1400px] w-full px-4 md:px-6 lg:px-8 ${innerClassName}`}>
        {children}
      </div>
    </Component>
  )
} 