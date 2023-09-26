import SellerProfile from "./ProfileCardSeller"
import Newspaper from "../images/newspaper.jpeg"
export default function SellersList() {
    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "5rem"
        }}>
                <SellerProfile
                      imageSrc={Newspaper} // Set your image source here
                    avatarSrc="https://images.unsplash.com/photo-1504199367641-aba8151af406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" // Set your avatar source here
                    title="Shyam" // Set the title here
                    location="sector 34" // Set the location here
                    description="I want to sell my newspaper for 10 rupee for per kg" // Set the description here
                />
         


            <SellerProfile
                  imageSrc="https://media.istockphoto.com/id/1494208663/photo/a-building-contractor-is-cutting-lightweight-metal-steel-corrugated-paint-coated-roofing.jpg?s=1024x1024&w=is&k=20&c=jYLfT7g0c0oK57XRJhKy3m3RKy0_11kIniH-DnNdPMA="// Set your image source here
                avatarSrc="https://example.com/avatar.jpg" // Set your avatar source here
                title="raveena " // Set the title here
                location="iiit naya raipur" // Set the location here
                description="

Steel sheet: 2/3 per kg." // Set the description here
            />
   

         
            <SellerProfile
                  imageSrc={"https://media.istockphoto.com/id/1257608884/photo/man-holding-crushed-plastic-bottles-in-his-hands-eco-friendly-lifestyle-zero-waste.jpg?s=612x612&w=0&k=20&c=ErppPBCHxvkbVVxtd0ua8RW0rhFE-eYVLQPpDIGeCLM="} // Set your image source here
                avatarSrc="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80" // Set your avatar source here
                title="shahrukh" // Set the title here
                location="sector 18" // Set the location here
                description="plastic bottles approx 1 kg" // Set the description here
            />
            <SellerProfile
                  imageSrc={"https://media.istockphoto.com/id/133993685/photo/scrap-metal-pieces-laying-in-a-pile.jpg?s=1024x1024&w=is&k=20&c=ESchoFXNtLl7bJL9Nr-QSQiHcyerE6FMbhOMiMy0MuQ="} // Set your image source here
                avatarSrc="https://example.com/avatar.jpg" // Set your avatar source here
                title="Rohit" // Set the title here
                location="sector 10" // Set the location here
                description="approx 10 15 kg aluminium " // Set the description here
            />

        </div>
    )
}