import './Banner.css'

function Banner(){
    // JSX parece HTML, mas não é. É como o React entende
    return (
        <header className="banner">
            <img src="/images/banner.png" alt="O banner ´principal da página do Organo"/>
        </header>
    )
}

export default Banner