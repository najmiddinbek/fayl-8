import Filter from "../../components/Filter"
import RemoveBtn from "../../components/RemoveBtn";
import Delete from "../../components/RemoveBtn"

const getTopics = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/pupils", {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch topics");
        }

        return res.json();
    } catch (error) {
        console.log("Error loading topics: ", error);
    }
};


export default async function TopicsList() {
    const a = await getTopics()
    const mavzula = a?.mavzula
    const maktablar = Array.from({ length: 54, }, (_, index) => index + 1);


    return (
        <>
            <div className="container">
                <Filter />
            </div >
        </>
    );
}