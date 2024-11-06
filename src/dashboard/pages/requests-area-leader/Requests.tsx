import RequestTable from "./components/table/RequestTable";
import TransitionsModal from "./components/modal/modal";
export function Requests() {
    return (
        <>
            <RequestTable />
            <TransitionsModal></TransitionsModal>
        </>
    );
}
