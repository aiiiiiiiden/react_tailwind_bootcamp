export default function Alert({type = 'error', children}: {type: string, children: React.ReactNode}) {
    const styles: Record<string, string> = {
        info: 'bg-blue-50 text-blue-800 border-blue-200',
        success: 'bg-green-50 text-green-800 border-green-200',
        warning: 'bg-yellow-50 text-yellow-800 border-yellow-200',
        error: 'bg-red-50 text-red-800 border-red-200',
    }
    return (
        // <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
        <div className='flex items-center justify-center m-4'>
            <div className={`
            p-6 
            border-l-4 
            rounded-lg
            shadow-xl
            max-w-md
            min-w-xs
            mx-4
            ${styles[type]}
            `}>
                {children}
            </div>
        </div>
    )
}