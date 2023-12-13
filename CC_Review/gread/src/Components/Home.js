import ONav from "./ONav";
import genre from '../Assests/Images/genre.png'

const Home = () => {
    return (
        <>
            <ONav />
            <div className="homeWrapper">
                <img src={"https://images.gr-assets.com/misc/1644957730-1644957730_goodreads_misc.png"} />
                <div class="black-box">Black box</div>
                <div class="gray-box">
                    <img src={"https://cdn.kobo.com/book-images/7292758c-a84a-4c53-80e4-73dd3a45c404/1200/1200/False/gone-girl.jpg"} />
                    <p>
                        Who are you?What have we done to each other?
                        These are the questions Nick Dunne finds himself asking on the morning of his fifth wedding anniversary when his wife Amy suddenly disappears.
                        The police suspect Nick. Amy's friends reveal that she was afraid of him, that she kept secrets from him. He swears it isn't true. A police examination of his computer shows strange searches. He says they weren't made by him. And then there are the persistent calls on his mobile phone.
                    </p>
                </div>

            </div>


        </>
    )
}

export default Home;

