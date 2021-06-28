import NavBar from './NavBar'

function Layout({ children }) {
    return (
        <div className='px-4  mt-4'>
            <NavBar />
            <main className=''>{children}</main>
        </div>
    )
}

export default Layout
