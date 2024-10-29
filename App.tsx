import {Provider} from "react-redux";
import {store} from "./api/store";
import {AppContent} from "./ui/AppContent";

export default function App() {
    return (
        <Provider store={store}>
            <AppContent />
        </Provider>
    );
}


