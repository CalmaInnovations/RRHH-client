import RequestTable from "./components/table/RequestTable";
import TransitionsModal from "./components/modals/components/modal";
import { NewRequest } from "./components/modals/new-request";
import { SuccessfulSending } from "./components/modals/successful-sending";
export function Requests() {
    return (
        <>
            <RequestTable />

            <TransitionsModal>
                <NewRequest />
            </TransitionsModal>

            <TransitionsModal>
                <SuccessfulSending />
            </TransitionsModal>
        </>
    );
}
