import { useQuery } from "@tanstack/react-query";
import { Label } from "../interfaces";
import { gitHubApi } from "../../api/gitHubApi";
import { sleep } from "../../helpers/sleep";


const getLabels = async (): Promise<Label[]> => {

    await sleep(2)
    const { data } = await gitHubApi.get('/labels');

    return data
}

export const useLabels = () => {
    const labelsQuery = useQuery(
        [ 'labels' ],
        getLabels,
        {
            staleTime: 1000 * 60 * 60,
            // placeholderData:[],
            initialData: [

                {
                    id: 2281766624,
                    node_id: "MDU6TGFiZWwyMjgxNzY2NjI0",
                    url: "https://api.github.com/repos/facebook/react/labels/Component:%20Scheduling%20Profiler",
                    name: "Component: Scheduling Profiler",
                    color: "1dc3d6",
                    default: false,
                },
                {
                    id: 204945357,
                    node_id: "MDU6TGFiZWwyMDQ5NDUzNTc=",
                    url: "https://api.github.com/repos/facebook/react/labels/Component:%20Shallow%20Renderer",
                    name: "Component: Shallow Renderer",
                    color: "eb6420",
                    default: false,
                }
            ]
        }
    )

    return labelsQuery
}
