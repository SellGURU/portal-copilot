/* eslint-disable @typescript-eslint/no-explicit-any */
import { SigmaContainer, useLoadGraph, useRegisterEvents, useSigma } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";
import { useEffect, useState } from "react";
import { useLayoutCircular } from "@react-sigma/layout-circular";
import Graph from "graphology";
import chroma from "chroma-js";
import { Application } from "@/api";

export const LoadGraph = () => {
  const loadGraph = useLoadGraph();
  const { positions, assign } = useLayoutCircular();

  useEffect(() => {
    const graph = new Graph();

    const fetchGraphData = async () => {
      try {
        const response = await Application.getgraphData();
        const graphData = response.data;
        console.log(graphData);

        graphData.nodes.forEach((node: any) => {
          const randomColor = chroma.random().hex();

          graph.addNode(node.id, {
            size: node.size,
            label: node.label,
            color: randomColor,
            x: 0,
            y: 0,
          });
        });

         graphData.edges.forEach((edge: any, index: number) => {
        const randomColor = chroma.random().hex();

        // Check if both source and target nodes exist
        if (graph.hasNode(edge.source) && graph.hasNode(edge.target)) {
          graph.addEdgeWithKey(`edge-${index}`, edge.source, edge.target, {
            weight: edge.weight,
            color: randomColor,
          });
        } else {
          console.warn(`Edge skipped: ${edge.source} to ${edge.target} - One or both nodes not found`);
        }
      });
        loadGraph(graph);
        assign();
        console.log(positions());
      } catch (error) {
        console.error("Error fetching graph data:", error);
      }
    };

    fetchGraphData();
  }, [loadGraph, assign, positions]);

  return null;
};


const GraphEvents = () => {
  const registerEvents = useRegisterEvents();
  const sigma = useSigma();
  const [draggedNode, setDraggedNode] = useState<string | null>(null);

  useEffect(() => {
    registerEvents({
      downNode: (e) => {
        setDraggedNode(e.node);
        sigma.getGraph().setNodeAttribute(e.node, "highlighted", true);
        sigma.refresh();
      },
      mousemovebody: (e) => {
        if (!draggedNode) return;
        const pos = sigma.viewportToGraph(e);
        sigma.getGraph().setNodeAttribute(draggedNode, "x", pos.x);
        sigma.getGraph().setNodeAttribute(draggedNode, "y", pos.y);
        e.preventSigmaDefault();
        e.original.preventDefault();
        e.original.stopPropagation();
      },
      mouseup: () => {
        if (draggedNode) {
          sigma.getGraph().removeNodeAttribute(draggedNode, "highlighted");
          setDraggedNode(null);
          sigma.refresh();
        }
      },
    });
  }, [registerEvents, sigma, draggedNode]);

  return null;
};
const AiKnowledge = () => {
  const [isContractsOpen, setIsContractsOpen] = useState(true);
  const [isReports, setISReports] = useState(true);
  const [isAgreementsOpen, setIsAgreementsOpen] = useState(true);

  return (
    <div className="relative text-primary-text flex justify-center w-full">
      <div className="w-64 text-primary-text flex flex-col px-5 pt-[55px] ">
      <button className=" rounded-md border border-main-border mb-2 w-full p-2 text-center bg-black-primary  hover:bg-gray-700">Longevity Activity</button>
      <button className=" rounded-md border border-main-border mb-2 w-full p-2 text-center bg-black-primary hover:bg-gray-700">Longevity Supplement</button>
      <button className=" rounded-md border border-main-border mb-2 w-full p-2 text-center bg-black-primary hover:bg-gray-700">Longevity Nutrition</button>
      <button className=" rounded-md border border-main-border mb-2 w-full p-2 text-center bg-black-primary hover:bg-gray-700">Longevity Mental</button>
      <button className=" rounded-md border border-main-border mb-2 w-full p-2 text-center bg-black-primary hover:bg-gray-700">Nutritionist</button>
      <button className=" rounded-md border border-main-border mb-2 w-full p-2 text-center bg-black-primary hover:bg-gray-700">Psychologist</button>
      <button className=" rounded-md border border-main-border mb-2 w-full p-2 text-center bg-black-primary hover:bg-gray-700">Pharmacist</button>
      <button className=" rounded-md border border-main-border mb-2 w-full p-2 text-center bg-black-primary hover:bg-gray-700">Physiotherapist</button>
        {/* Add more buttons as needed */}
      </div>
     
      <SigmaContainer
  settings={{
    allowInvalidContainer: true,
    renderLabels: true,
    // labelColor: { color:  "fff"},
   
  }}
  id="sigma-container"

  style={{ height: window.innerHeight, width: window.innerWidth, backgroundColor: "#121212",  }}
>
  <LoadGraph />
  <GraphEvents />
</SigmaContainer>
      
      <>
        <div className="fixed right-5 top-[15%] w-64 text-primary-text bg-black-primary border border-main-border flex flex-col p-4 rounded-md">
          <button className="mb-4 flex justify-center gap-2 text-secondary-text border border-main-border border-dashed py-2 rounded-lg">
            <img src="/Themes/Aurora/icons/add-square.svg" alt="Add" />
            Add New Document
          </button>
          <div className="overflow-y-auto">
            <div className="mb-4">
              <h3 className="text-lg mb-2">Documents</h3>
              <div className="ml-4">
                <div className="flex items-center mb-2 cursor-pointer">
                  <input className="custom-checkbox" type="checkbox" id="Contracts" />
                  <label onClick={() => setIsContractsOpen(!isContractsOpen)} htmlFor="Contracts" className="ml-2 flex gap-1">
                    <img className={`${isContractsOpen && "rotate-180"}`} src="/Themes/Aurora/icons/chevron-down.svg" alt="" /> Contracts
                  </label>
                </div>
                {isContractsOpen && (
                  <div className="ml-4 border-l-2 border-gray-600 pl-2">
                    <div className="flex items-center mb-2">
                      <input className="custom-checkbox" type="checkbox" id="legal" />
                      <label htmlFor="legal" className="ml-2">
                        Legal
                      </label>
                    </div>
                    <div className="flex items-center mb-2">
                      <input className="custom-checkbox" type="checkbox" id="nda" />
                      <label htmlFor="nda" className="ml-2">
                        NDA.pdf
                      </label>
                    </div>
                    <div className="flex items-center mb-2 cursor-pointer" onClick={() => setIsAgreementsOpen(!isAgreementsOpen)}>
                      <input className="custom-checkbox" type="checkbox" id="agreements" />
                      <label htmlFor="agreements" className="ml-2">
                        Agreements
                      </label>
                    </div>
                    {isAgreementsOpen && (
                      <div className="ml-4 border-l-2 border-gray-600 pl-2">
                        <div className="flex items-center mb-2">
                          <input className="custom-checkbox" type="checkbox" id="client" />
                          <label htmlFor="client" className="ml-2">
                            Client
                          </label>
                        </div>
                        <div className="flex items-center mb-2">
                          <input className="custom-checkbox" type="checkbox" id="service" />
                          <label htmlFor="service" className="ml-2">
                            Service
                          </label>
                        </div>
                        <div className="flex items-center mb-2">
                          <input className="custom-checkbox" type="checkbox" id="vendor" />
                          <label htmlFor="vendor" className="ml-2">
                            Vendor
                          </label>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                <div className="flex items-center mb-2 cursor-pointer">
                  <input className="custom-checkbox" type="checkbox" id="Contracts" />
                  <label onClick={() => setISReports(!isReports)} htmlFor="Contracts" className="ml-2 flex gap-1">
                    <img className={`${isReports && "rotate-180"}`} src="/Themes/Aurora/icons/chevron-down.svg" alt="" /> Reports
                  </label>
                </div>
              </div>
            </div>
            <div>
              <p className="text-secondary-text">
                Practicing guided <span className="text-purple-400">sleep</span> meditation will imbue your <span className="text-purple-400">sleep</span>{" "}
                with awareness. In that way, <span className="text-purple-400">sleep</span> itself becomes a meditation. If you{" "}
                <span className="text-purple-400">sleep</span> for an hour, you've meditated for an hour. Lovely to think about it that way, isn't it?
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default AiKnowledge;