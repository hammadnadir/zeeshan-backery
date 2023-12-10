import { useSelector } from "react-redux";
// import { productDataRequest } from "../redux/home";
import generateSitemap from "../components/sitemap";
import { wrapper } from "../store";
import { siteMapDataRequest } from "@/redux/sitemap";
// import { sentslugRequest } from "../redux/product";

export default function Sitemap() {

    const { products } = useSelector((state) => state.home);
    const { sitemapProducts } = useSelector((state) => state.sitemap);
    const { details } = useSelector((state) => state.product);
    const data = generateSitemap(sitemapProducts)

    return (
        <>
            {data}
        </>
    );
}

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (ctx) => {
        await Promise.all([
            store.dispatch(siteMapDataRequest()),
            // await store.dispatch(sentslugRequest("alldata"))
        ]);
    }
);