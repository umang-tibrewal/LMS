
import pimg from "../PatnerIMG/ExceedL.avif"
import Naandi  from "../PatnerIMG/Naandi.png"
import vikranshila  from "../PatnerIMG/vigramshila.png"
import hp from "../PatnerIMG/hp.jpg"



function PartnerList() {
    const partners = [
        { name: 'Company A', logo: pimg },
        { name: 'Company B', logo: Naandi },
        { name: 'Company B', logo:  vikranshila},
        { name: 'Company B', logo:  hp},
      
     
       
    ];
    
    return (
        <div className="w-full mt-10">
            <div className="container mx-auto px-4 py-8 text-center">
                <h1 className="font-serif" style={{color: '#000000'}}>Our Clients</h1>
            </div>
            <ul className="flex flex-wrap justify-center w-full"> 
                <li className="p-4 rounded-lg shadow-sm bg-white"> 
                  
                    <div className="flex flex-wrap justify-center w-full"> 
                        {partners.map((partner) => (
                            <div  className="w-auto px-4"  style={{height:"95px",width:"250px"  ,margin:"0 10px 25px 25px"}} > {/* Add px-4 to add some padding */}
                                <img src={partner.logo} alt={partner.name} className="w-22 h-21 object-cover  " /> 
                            </div>
                        ))}
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default PartnerList;