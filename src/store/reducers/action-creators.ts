import {AuthActionsCreators} from "./auth/actions";
import {EventActionCreators} from "./event/actions";

export const allActionsCreators = {
    ...AuthActionsCreators,
    ...EventActionCreators,
}