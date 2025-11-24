export function H1({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <h1 className={`text-4xl font-bold text-gray-900 leading-tight ${className}`}>
      {children}
    </h1>
  );
}

export function H2({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <h2 className={`text-3xl font-bold text-gray-900 leading-tight ${className}`}>
      {children}
    </h2>
  );
}