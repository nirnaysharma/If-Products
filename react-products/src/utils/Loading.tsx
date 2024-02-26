export default function Loading() {
    return (
        <div style={{height: '100vh', width: '100vw', justifyContent: 'center', alignItems: 'center', verticalAlign: 'center',
        display:'flex'}}>
            <div style={{
                minWidth: '100px',
                //width: '33.33%',
                height: '100px'
            }}>
                <span className="loader"></span>
            </div>
        </div>
    )
}