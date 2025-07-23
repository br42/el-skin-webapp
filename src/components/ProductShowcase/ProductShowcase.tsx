import ProductCard from '../ProductCard/ProductCard';
import "./ProductShowcase.css";
import promo1 from '../../assets/images/image 4.png';
import promo2 from '../../assets/images/image 2.png';
import promo3 from '../../assets/images/image 1.png';
import creme1 from '../../assets/images/image 8.png';

const produtos = [
  {
    key: 1,
    src: creme1,
    title: "Protetor solar AL SUN",
    description: <>alta proteção e pele luminosa sem grude nem pele cinzenta</>,
    tags: [ 
      { name: "protecao", bgcolor: "#5DD4DB", fgcolor: "#FFFFFF" },
      { name: "rosto",    bgcolor: "#DB5DB1", fgcolor: "#FFFFFF" }
    ],
    price: "R$ 79,90",
  },
  {
    key: 2,
    src: promo1,
    title: "Linha corporal",
    description: <>linha corporal com benefícios além da hidratação</>,
    tags: [ 
      { name: "protecao", bgcolor: "#5DD4DB", fgcolor: "#FFFFFF" },
      { name: "rosto",    bgcolor: "#DB5DB1", fgcolor: "#FFFFFF" }
    ],
    price: "R$ 79,90",
  },
  {
    key: 3,
    src: promo2,
    title: "kits incríveis",
    description: <>kits incríveis até 50% OFF</>,
    tags: [ 
      { name: "protecao", bgcolor: "#5DD4DB", fgcolor: "#FFFFFF" },
      { name: "rosto",    bgcolor: "#DB5DB1", fgcolor: "#FFFFFF" }
    ],
    price: "R$ 79,90",
  },
  {
    key: 4,
    src: promo3,
    title: "linha anti-age",
    description: <>toda linha anti-age com 15% OFF</>,
    tags: [ 
      { name: "protecao", bgcolor: "#5DD4DB", fgcolor: "#FFFFFF" },
      { name: "rosto",    bgcolor: "#DB5DB1", fgcolor: "#FFFFFF" }
    ],
    price: "R$ 79,90",
  },
  {
    key: 10,
    src: creme1,
    title: "Protetor solar AL SUN",
    description: <>alta proteção e pele luminosa sem grude nem pele cinzenta</>,
    tags: [ 
      { name: "protecao", bgcolor: "#5DD4DB", fgcolor: "#FFFFFF" },
      { name: "rosto",    bgcolor: "#DB5DB1", fgcolor: "#FFFFFF" }
    ],
    price: "R$ 79,90",
  },
  {
    key: 20,
    src: promo1,
    title: "Linha corporal",
    description: <>linha corporal com benefícios além da hidratação</>,
    tags: [ 
      { name: "protecao", bgcolor: "#5DD4DB", fgcolor: "#FFFFFF" },
      { name: "rosto",    bgcolor: "#DB5DB1", fgcolor: "#FFFFFF" }
    ],
    price: "R$ 79,90",
  },
  {
    key: 30,
    src: promo2,
    title: "kits incríveis",
    description: <>kits incríveis até 50% OFF</>,
    tags: [ 
      { name: "protecao", bgcolor: "#5DD4DB", fgcolor: "#FFFFFF" },
      { name: "rosto",    bgcolor: "#DB5DB1", fgcolor: "#FFFFFF" }
    ],
    price: "R$ 79,90",
  },
  {
    key: 40,
    src: promo3,
    title: "linha anti-age",
    description: <>toda linha anti-age com 15% OFF</>,
    tags: [ 
      { name: "protecao", bgcolor: "#5DD4DB", fgcolor: "#FFFFFF" },
      { name: "rosto",    bgcolor: "#DB5DB1", fgcolor: "#FFFFFF" }
    ],
    price: "R$ 79,90",
  },
];

function ProductShowcase () {
  
  
  return (
    <div className="productshowcase">
      <h3 className="center">nossos queridinhos estão aqui</h3>
      
      <div className="productshowcase-lista-produtos-container">
        <div className="productshowcase-lista-produtos">
        {
          produtos.map((item, index) => {
            return <ProductCard key={index} idkey={index} product={item} />
          })
        }
        </div>
      </div>
    </div>
  );
}

export default ProductShowcase;

