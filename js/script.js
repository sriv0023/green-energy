function preloader() {

    imageList = [
        "/image/dollar.jpg",
        "/image/voucher.jpg",
        "/image/policy.jpg"
    ];

    image = [];

    for (let i = 0; i < imageList.length; i += 1) {
        image[i] = new Image();
        image[i].src = imageList[i];
    }

    console.log(`Preloaded image:\n\t${image[0].src}\n\t${image[1].src}\n\t${image[2].src}`);
};  

window.addEventListener("load", preloader);

let button = document.querySelectorAll("button"); 

let content = {
    page1: {
        headingContent: "",
        bodyText: "Implementing tax credits or deductions for individuals who invest in green energy solutions can significantly incentivize the adoption of sustainable practices. By offering financial incentives, such as rebates or tax breaks, individuals are more likely to invest in renewable energy sources like solar panels or wind turbines. This not only reduces carbon emissions but also promotes innovation in clean energy technologies. Moreover, it empowers individuals to contribute actively to environmental conservation efforts while benefiting from long-term savings on energy costs. Such measures align with global efforts to combat climate change and transition towards a more sustainable future.",
        imgUrl: "/image/dollar.jpg",
        imgAlt: "Hand holding dollar bills"
    },
    page2: {
        headingContent: "",
        bodyText: "Providing vouchers or grants to low-income households can play a crucial role in facilitating their transition to green energy solutions. By offering financial assistance, such as subsidies or grants, these households can overcome the initial cost barriers associated with investing in renewable energy technologies. This support ensures that all segments of society can participate in the transition to clean energy, regardless of their financial means. Additionally, it helps alleviate energy poverty by reducing utility bills and improving the overall quality of life for low-income families. Ultimately, such initiatives promote equity and inclusivity in the adoption of sustainable energy practices, contributing to a more environmentally friendly and socially just society.",
        imgUrl: "/image/voucher.jpg",
        imgAlt: "A ticket"
    },
    page3: {
        headingContent: "",
        bodyText: "Implementing net metering policies is a crucial step towards encouraging the adoption of renewable energy systems at the individual level. By allowing individuals to sell excess renewable energy generated from their own systems back to the grid, net metering effectively offsets their energy costs and incentivizes investment in clean energy technologies. This creates a win-win scenario where individuals not only benefit from reduced energy bills but also contribute to the overall sustainability of the grid by supplying clean power. Moreover, net metering promotes decentralization and resilience in the energy sector by diversifying energy sources and reducing reliance on traditional fossil fuels.",
        imgUrl: "/image/policy.jpg",
        imgAlt: "People working on laptops"
    }
};

let container = document.querySelector(".content");

function handleSelection(e) {
        
    let pageContent = document.querySelector(".dynamic-content");
    
    while (pageContent.firstChild) {
        pageContent.removeChild(pageContent.firstChild);
    }
    
    for (let i = 0; i < button.length; i++) {
        if (button[i].hasAttribute("id")) {
            button[i].removeAttribute("id");
        }
    }
    
    e.target.setAttribute("id", "active-btn");
    
    let heading = document.createElement("h2");
    let para = document.createElement("p");
    let image = document.createElement("img");
    let selectedContent = e.target.getAttribute("data-content");
    
    heading.innerHTML = content[selectedContent].headingContent;
    para.innerHTML = content[selectedContent].bodyText;
    image.src = content[selectedContent].imgUrl;
    image.alt = content[selectedContent].imgAlt;
    
    pageContent.appendChild(heading);
    pageContent.appendChild(image);
    pageContent.appendChild(para);
    
    container.appendChild(pageContent);
};

for (let i = 0; i < button.length; i++) {   
    button[i].addEventListener("click", handleSelection);
}
