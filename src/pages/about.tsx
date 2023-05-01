/***** IMPORTS *****/
import Layout from '@/components/Layout/Layout';
import React, { FC } from 'react';


/***** INTERFACES *****/
interface AboutProps {

};


/***** COMPONENT-FUNCTION *****/
const About: FC<AboutProps> = (): JSX.Element => {

    /** return statement */
    return (
        <Layout>
            About
        </Layout>
    );
};

/***** EXPORTS *****/
export default About;