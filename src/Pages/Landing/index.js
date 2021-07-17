import Header from '../../Components/Header'
import SlideShow from '../../Components/SlideShow'

import { 
    Container, 
    SessionTitle, 
    ItemSmall, 
    ItemLarge, 
    } from './style'



const Landing = () => {
    let data = {
        products:  [
            {
                "url": "http://demo2.posthemes.com/pos_rozer/layout3/81-large_default/new-balance-fresh-foam-arishi-sport-2.jpg"
            },
            {
                "url": "http://demo2.posthemes.com/pos_rozer/layout3/52-large_default/madden-by-steve-madden-cale-6.jpg"
            },
            {
                "url": "http://demo2.posthemes.com/pos_rozer/layout3/24-large_default/brown-bear-vector-graphics.jpg"
            },
            {
                "url": "http://demo2.posthemes.com/pos_rozer/layout3/32-large_default/new-balance-fresh-foam-lazr-v1-sport.jpg"
            },
    
            {
                "url": "http://demo2.posthemes.com/pos_rozer/layout3/48-large_default/trans-weight-hooded-wind-and-water-resistant-shell.jpg"
            },
            {
                "url": "http://demo.posthemes.com/pos_ecolife_singleproduct/treadmill/588-large_default/brown-bear-notebook.jpg"
            },
            {
                "url": "http://demo.posthemes.com/pos_ecolife_fashion/fashion4/321-large_default/new-luxury-men-s-slim-fit-shirt-short-sleeve-stylish-casual-blouse.jpg"
            },
            {
                "url": "http://demo.posthemes.com/pos_ecolife_singleproduct/skateboard/648-large_default/customizable-mug.jpg"
            },
    
        ],

        brands: [
            {
                "url": "https://logospng.org/wp-content/uploads/nike.jpg"
            },
            {
                "url": "data:image/png;base64,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"
            },
            {
                "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAAD5+fnLy8vo6Oj6+vqNjY19fX1LS0uysrLa2trV1dU/Pz+4uLihoaGurq53d3eXl5fy8vJlZWXDw8NYWFiBgYGmpqZdXV1qampDQ0MsLCxQUFCHh4dVVVUYGBgzMzMODg7k5OQjIyMXFxcgICA5OTlSCnFIAAADhUlEQVR4nO3aa3eiSBSF4RYQFOSOAhpNNJ3+/z9xzHRnxkknG4mnpGet9/mcsKsETl2ob98AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/P/NvVfzqZthZh4kzTILo/6w3R1n7z0+Lbp+U7apH1dTt3QsL26yTff0W5+UbR/mfjB1y4dVSb55GNWzd17qMI2n7sUnPL+sb+nbpaco/8O6WaXR87WtP177h4vSn7pfvzSb70NtLcqlHwfexT95Qewvy2Ix9J/Z1Peyyg+yhefHLfHkFbwkj3RNiqa7lV4ub8F2xFPml1t1qWKSTvqyrvTp2GHdS3t1wfDeI0l7FK3pmi9etVmLqx7ueCO9UP3a5S0zlKoUV96lZl3QZP/ymy/fiqu/fPXpGGOp+peZRGQiYXsyifhcpWperQeGESmdSAmNQj4mb6DlW5KKnJ3DslqI3O+2ucFRZDmrqmr+8mQdNt+JtKV12k9qWfTsIO9R5DkZN9QjOnOxSq9UYGKf16g8N0OxrGv2cSptZR/3N7Xo2FuH5aqHrmYaasyYWQ2+b36oMOOsf6nQ2+eH/zFXWQ+2WRfkDMo2KlY9LGyzLqj6vbONSlQPI9usC6qHj7ZRJ9XDzjbrgloRWxdw1cNpKo31k6PWMzNXW37y3bAeonwV1huHvZGbXeZpcrvPzcJbFnD75UWg4owr9y/qS8HCQZ6cQrl4TuUz6uQrq9ogcjAmytWao40Mtc9nfhflHXS2UyML6g/LVXClFk4r62XFZbBcYtiVN7lWc7udqF9Go+3aeCUynp1/Uaz0N6fb35BABrQGXRgUy7MI9W17RImcHob3OooTy2bs8q9WAq9Vm6Sz0mGF+U2wV02ZrdPxjamWaq10/t0cdENL9cGZbTnmcU30Z+5ZNM2JhapVRe9sETbDlSdowoEjGf09vhp+psrlK/lqVWRp8lFHgyTNioHfaNKjGP/wQzkPePOyOtR9EUVR0deH1cs1/9K1rr+HXs3zy5uOs32gb9WrF2TZBGc4T+l+6IzTVY512QzMcYMo9Y33S69W+e3XTyc+1+Fy4AzVT6XX7f1pX9DT66m1tRy/L6zqzbkajVibpEkZZn/IadTqlDRpnpX71wLTrR/ODuvuXHI2YZnl6bsDfVfb5NldZqgTuucEDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBH/gKIYCeVc4LioQAAAABJRU5ErkJggg=="
            },
            {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNcqxGFm2PhwdZdOBPQn3SsJKKHPfCpLzB6eqhmKeW1Y1-62RJxhIw8SUn8D_xFAk0JGY&usqp=CAU"
            },
            {
                "url": "https://santaclaracalcados.com.br/media/mgs/brand/Lacoste-1.jpg"
            },
            {
                "url": "https://www.prootica.com.br/wp-content/uploads/2016/01/mormaii.png"
            },
        ],

        colections: [
            {
                url: "https://static.netshoes.com.br/bnn/l_netshoes/2021-07-08/5712_trio5_desk.jpg"
            },
            {
                url: "https://static.netshoes.com.br/bnn/l_netshoes/2021-07-02/206_trio5.jpg"
            },
            {
                url: "https://static.zattini.com.br/bnn/l_zattini/2021-06-30/7669_282x337_menu_beleza.jpg"
            },
            {
                url: "https://static.zattini.com.br/bnn/l_zattini/2021-06-30/5631_282x337_menu_masc.jpg"
            },
        ]

    }
   
    return (
        <>
            <Header />

            <Container>
                <SessionTitle>
                    Produtos
                </SessionTitle>

                <SlideShow data={data.products} />
            </Container>

            <Container>
                <SessionTitle>
                    Marcas
                </SessionTitle>

                <div className="content">

                {
                    data.brands.map(brand => (
                        <ItemSmall key={brand.url}>
                            <img src={brand.url} alt={brand.url} />
                        </ItemSmall>

                    ))
                }

                </div>
            </Container>

            <Container>
                <SessionTitle>
                    Coleções
                </SessionTitle>
                    {
                        data.colections.map(colection => (
                            <ItemLarge key={colection.url}>
                                <img src={colection.url} alt={colection.url} />
                            </ItemLarge>

                        ))
                    }
            </Container>

            <Header />
        </>
    )
}

export default Landing