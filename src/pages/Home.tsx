import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { ContentHome } from '../components/ContentHome.js'

export function Home() {
    return (
        <>
            <Navbar />
            <ContentHome />
            <Footer />
        </>
    )
}