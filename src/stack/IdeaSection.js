import { useState, useEffect } from "react";
import { useDB } from "../context/dbProvider";
import { useAuth } from "../context/authProvider";
import Idea from "../idea/Idea";
import Detail from "../idea/Detail";
import StackActions from "./StackActions";
import { AnimatePresence } from "framer-motion";

function IdeaSection({ stackId, repoUrl }) {
  const [addIdea, setAddIdea] = useState(false);
  const [order, setOrder] = useState("created");
  const [filter, setFilter] = useState(-1);
  const [ideas, setIdeas] = useState(null);
  const { listenToIdeas } = useDB();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;
    const unsub = listenToIdeas(stackId, setIdeas, order, filter);
    return unsub;
  }, [user, order, filter]);

  return (
    <section className="mt-6 max-w-[50rem] overflow-hidden sm:mt-12 lg:mt-0 lg:w-8/12">
      <h2 className="mb-2 font-lato text-t-xl font-medium leading-5 text-white sm:text-2xl">
        Your stack
      </h2>
      <hr />
      <StackActions
        stackId={stackId}
        setAddIdea={setAddIdea}
        setOrder={setOrder}
        setFilter={setFilter}
      />

      <ul className="min-h-[7.5rem]">
        <AnimatePresence>
          {addIdea && (
            <Detail isForm stackId={stackId} handleExpand={() => setAddIdea(false)} />
          )}
          {ideas?.map((idea, i) => (
            <Idea key={idea.id} idx={i} stackId={stackId} idea={idea} />
          ))}
        </AnimatePresence>
      </ul>
    </section>
  );
}

export default IdeaSection;