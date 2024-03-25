import { useQuery } from "@tanstack/react-query";
import { gitHubApi } from "../../api/gitHubApi"
import { Issue } from "../interfaces"




const getIssues = async (): Promise<Issue[]> => {

    const { data } = await gitHubApi.get<Issue[]>('/issues')
    console.log(data);
    return data;
}

export const useIssues = () => {

    const issuesQuery = useQuery(
        [ 'issues' ],
        getIssues
    )



    return {
        issuesQuery,
    }
}