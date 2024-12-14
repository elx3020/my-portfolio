import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/Home Page/HomePage";
import WorkPage from "./pages/Work Page/WorkPage";
import ContactPage from "./pages/Contact Page/ContactPage";
import ProjectDescriptionPage from "./pages/ProjectDescription Page/ProjectDescriptionPage";
import Page404 from "./pages/Page404/Page404";
import About from "./pages/About Page/AboutPage";
import BlogPage from "./pages/Blog Page/BlogPage";
import BlogPostPage from "./pages/Blog Page/BlogPostPage";
export default function AppRoutes(props: { handlePage: (currentPage: string) => void }) {

    const { handlePage } = props;


    return (
        <Routes>
            <Route
                path="/"
                element={
                    <HomePage handlePage={handlePage} />
                }
            />
            <Route
                path="work"
                element={
                    <WorkPage handlePage={handlePage} />
                }
            />
            {/* <Route
                path="studies"
                element={
                    <StudiesPage />
                }
            /> */}
            <Route path="about" element={<About handlePage={handlePage} />} />
            <Route path="blog" element={<BlogPage handlePage={handlePage} />} />
            <Route path="blog/post/:postId" element={<BlogPostPage handlePage={handlePage} />} />
            <Route
                path="contact"
                element={
                    <ContactPage handlePage={handlePage} />
                }
            />
            <Route
                path="projects/:arr_handle/:project_handle"
                element={
                    <ProjectDescriptionPage
                        handlePage={handlePage}
                    />
                }
            />
            <Route path="404" element={<Page404 handlePage={handlePage} />} />
            <Route path="*" element={<Navigate replace={true} to="404" />} />
        </Routes>
    )
}

