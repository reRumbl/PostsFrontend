import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/Auth/LoginPage';
import PrivateRoute from './PrivateRoute';
import RegisterPage from '../pages/Auth/RegisterPage';
import VerifyPage from '../pages/Auth/VerifyPage';
import PostsPage from '../pages/Post/PostsPage';
import UploadPostPage from '../pages/Post/UploadPostPage';
import PostPage from '../pages/Post/PostPage';
import EditPostPage from '../pages/Post/EditPostPage';
import UserPage from '../pages/User/UserPage';
import NotFound from '../components/NotFound/NotFound';
import PrivacyPolicyPage from '../pages/Other/PrivacyPolicyPage';
import TermsOfServicePage from '../pages/Other/TermsOfServicePage';


const AppRouter = () => {
    return (
        <Routes>
            {/* Auth routes */}
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/verify/:token' element={<VerifyPage />} />
            
            {/* Public routes */}
            <Route path='/posts/:postId' element={<PostPage />} />
            <Route path='/users/:userId' element={<UserPage />} />
            <Route path='/privacy' element={<PrivacyPolicyPage />} />
            <Route path='/terms' element={<TermsOfServicePage />} />
            
            {/* Private routes */}
            <Route element={<PrivateRoute />}>
                <Route path='/' element={<PostsPage />} />
                <Route path='/posts/upload' element={<UploadPostPage />} />
                <Route path='/posts/edit/:postId' element={<EditPostPage />} />
            </Route>
            
            {/* Default route */}
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};


export default AppRouter;
