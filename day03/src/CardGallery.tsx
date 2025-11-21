export default function CardGallery() {
  return (
    <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        padding: '20px',
    }}>
        {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
            <div key={num} style={{
                // backgroundColor: ',
                padding: '20px',
                borderRadius: '8px',
                textAlign: 'center',
                fontSize: '22px',
                fontWeight: '500',
                border: '1px solid #e5e7eb',
                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
            }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <img
                        src={`https://picsum.photos/300/200?random=${num}`}
                        alt={`card ${num}`}
                    />
                    <p>card {num}</p>
                    <button style={{backgroundColor: 'blue', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer'}}>Buy Now</button>
                </div>
            </div>
        ))}
    </div>
  )
}