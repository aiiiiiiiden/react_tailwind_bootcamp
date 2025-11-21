export default function GridBaseDashboardLayout() {
  return (
    <div style={{
        display: 'grid',
        // gridTemplateColumns: 'repeat(4, 1fr)',
        // gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gridTemplateColumns: 'auto',
        gridTemplateRows: 'auto',
        gap: '16px',
        padding: '20px',
        backgroundColor: '#f9fafb',
        minHeight: '100vh'
    }}>
        {/* 헤더 */}
        <div style={{
            gridColumn: 'span 4',
            padding: '20px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        }}>
            <h1 style={{ margin: 0 }}>Dashboard</h1>
        </div>
        {/* Stats Cards */}
        <div style={{
            padding: '20px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        }}>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>Total Users</div>
            <div style={{ fontSize: '32px', fontWeight: 'bold', marginTop: '8px' }}>1,234</div>
        </div>
        <div style={{
            padding: '20px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        }}>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>Revenue</div>
            <div style={{ fontSize: '32px', fontWeight: 'bold', marginTop: '8px' }}>$56,789</div>
        </div>
        <div style={{
            padding: '20px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        }}>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>Orders</div>
            <div style={{ fontSize: '32px', fontWeight: 'bold', marginTop: '8px' }}>890</div>
        </div>
        <div style={{
            padding: '20px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        }}>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>Growth</div>
            <div style={{ fontSize: '32px', fontWeight: 'bold', marginTop: '8px' }}>+23%</div>
        </div>
        <div style={{
            gridColumn: 'span 3',
            padding: '20px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            minHeight: '300px'
        }}>
            <h2 style={{ margin: '0 0 16px 0' }}>Sales Chart</h2>
            <div style={{ 
                height: '250px', 
                backgroundColor: '#f3f4f6', 
                borderRadius: '4px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '14px',
                color: '#6b7280'
            }}>
                Chart Placeholder
            </div>
        </div>
        <div style={{
            gridColumn: 'span 1',
            padding: '20px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        }}>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>Activity</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #e5e7eb' }}>New user signup</li>
                <li style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #e5e7eb' }}>Order #1234</li>
                <li style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #e5e7eb' }}>Payment received</li>
            </ul>
        </div>
    </div>
  )
}