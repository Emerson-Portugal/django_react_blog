import { useState } from "react";
import Blog from "./Blog"

const categories = [
    {
        name: 'New Arrivals',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg',
    },
    {
        name: 'Productivity',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg',
    },
    {
        name: 'Workspace',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg',
    },
    {
        name: 'Accessories',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg',
    },
 
]



function Index() {

    const [categorite, setCategories] = useState(categories)

    return (
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {
            categorite
            
            ? 
            categorite.map((category, index) => (
                    <Blog
                        key={index}
                        name={category.name}
                        href={category.href}
                        imageSrc={category.imageSrc}
                    />
                ))
            :
                <div className="animate-pulse p-2">
                    <div className="rounded w-full h-52 bg-gray-400"></div>

                    <div className="flex flex-col mt-5">
                        <div className="w-full h-5 bg-gray-400 rounded"></div>
                        <div className="mt-2 w-10/12h-3 bg-gray-400 rounded"></div>
                        <div className="mt-2 w-8/12 h-3 bg-gray-400 rounded"></div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Index
