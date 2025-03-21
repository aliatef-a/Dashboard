import ActivityStatement from "../../components/pageHome/ActivityStatement";
import CorrespondenceCases from "../../components/pageHome/CorrespondenceCases";
import LatestCorrespondence from "../../components/pageHome/LatestCorrespondence";

function Home() {
    return (
        <main>
            <div className="container-page">
                <h1 className="text-text-body text-lg font-medium">
                    صباح الخير , <span className="text-primary-150 font-bold">أحمد عطيه 👋</span>
                </h1>
                <CorrespondenceCases />
                <ActivityStatement />
                <LatestCorrespondence />
            </div>
        </main>
    );
}

export default Home;
