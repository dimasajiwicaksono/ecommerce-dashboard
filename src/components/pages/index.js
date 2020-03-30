import React from 'react'
import { Layout } from 'antd';
import styles from './styles.module.css'
import MainContent from './MainContent';

function LayoutIndex () {
    
    const { Header, Sider, Footer, Content } = Layout 
    const bg = {
        header : '#002766',
        sider: '#002766',
        footer: 'green',
        content: '#d9d9d9'
    }
    return (
        <div>
            <Layout>
                <Sider 
                    className={styles.Sider} 
                    style={{backgroundColor:bg.sider}} 
                    collapsible></Sider>
                <Layout>
                    <Header 
                        className={styles.Header} 
                        style={{backgroundColor:bg.header}}></Header>
                    <Content style={{backgroundColor:bg.content}}><MainContent /></Content>
                    {/* <Footer 
                        className={styles.Footer} 
                        style={{backgroundColor:bg.footer}}>Footer</Footer> */}
                </Layout>
            </Layout>
        </div>
    )
}

export default LayoutIndex
