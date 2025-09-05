import { useAuth } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

const RedirectIfSignedIn = ({ children }) => {
    const { isSignedIn, isLoaded } = useAuth();

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    if (isSignedIn) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default RedirectIfSignedIn;
