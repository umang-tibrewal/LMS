
import pimg from "../PatnerIMG/ExceedL.avif"
import Naandi  from "../PatnerIMG/Naandi.png"
import vikramshila from "../PatnerIMG/vigramshila.png"

function PartnerList() {
    const partners = [
        { name: 'Company A', logo: pimg },
        { name: 'Company B', logo: Naandi },
        { name: 'Company B', logo: vikramshila },
        { name: 'Company B', logo: 'logoB.png' },
        { name: 'Company B', logo: 'logoB.png' },
        { name: 'Company B', logo: 'logoB.png' },
     
       
    ];
    
    return (
        <div className="w-full">
            <div className="container mx-auto px-4 py-8 text-center">
                <h1 className="font-serif" style={{color: '#000000'}}>Our Client</h1>
            </div>
            <ul className="flex flex-wrap justify-center w-full"> {/* Change justify-around to justify-center and add w-full */}
                <li className="p-4 rounded-lg shadow-sm bg-white"> 
                    <h2 className="text-2xl font-bold text-center mb-4">Our Clients</h2> 
                    <div className="flex flex-wrap justify-center w-full"> {/* Change justify-around to justify-center */}
                        {partners.map((partner) => (
                            <div key={partner.name} className="w-auto px-4"> {/* Add px-4 to add some padding */}
                                <img src={partner.logo} alt={partner.name} className="w-16 h-16 object-cover mx-auto"  style={{height:"85px",width:"200px",  margin:"0.5px 5px 0.5px 5px"}} /> 
                            </div>
                        ))}
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default PartnerList;