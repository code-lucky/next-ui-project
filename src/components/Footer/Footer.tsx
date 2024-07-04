export default async function Footer() {
    return (
        <>
            <footer className='flex justify-center px-5 border-t'>
                <section className="max-w-screen-xl w-full flex gap-28 h-14 items-center">
                    <p>&copy; {new Date().getFullYear()} My App</p>
                </section>
            </footer>
        </>
    )
}
