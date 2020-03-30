import React from 'react'
import { Card, Row, Col, Typography, Statistic } from 'antd'
import { ArrowUpOutlined } from '@ant-design/icons';
import styles from './styles.module.css'
import CardContentTop from './Card/CardContentTop'
import CardContentCenter from './Card/CardContentCenter'
// import CardContentBottom from './Card/CardContentBottom'

function MainContent() {

    const {Title} = Typography
    const layout= 
    {
        contentCenter: { lg : {span: 8} },
        contentTop : { lg : {span: 6} },
        contentBottom : { lg: {span: 12} }
    }

    return (
        <div className={styles.MainContent} >
            <div className={styles.contentTop}>
                <Row gutter={12}>
                    <Col {...layout.contentTop}><CardContentTop from='total'/></Col>
                    <Col {...layout.contentTop}><CardContentTop from='bukalapak'/></Col>
                    <Col {...layout.contentTop}><CardContentTop from='tokopedia'/></Col>
                    <Col {...layout.contentTop}><CardContentTop from='shoopee'/></Col>
                </Row>
            </div>
            <div className={styles.contentCenter}>
                <Row gutter={12}>
                    <Col lg={6} xs ={24}>
                        <Card title='Product View' style={{height:'100%'}}>
                            <Title level={3}>300K Views</Title>
                            <Statistic 
                                title="Active"
                                value={11.28}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<ArrowUpOutlined />}
                                suffix="%"
                            />
                        </Card>
                    </Col>
                    <Col lg={18} xs={24}>
                        <Row>
                            <Col {...layout.contentCenter} ><CardContentCenter from='purchase'/></Col>
                            <Col {...layout.contentCenter} ><CardContentCenter from='checkout'/></Col>
                            <Col {...layout.contentCenter} ><CardContentCenter from='abandoned'/></Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            {/* <div className={styles.contentBottom}>
                <Row gutter={12}>
                    <Col {...layout.contentBottom}><CardContentBottom /></Col>
                    <Col {...layout.contentBottom}><CardContentBottom /></Col>
                </Row>
            </div> */}
        </div>
    )
}

export default MainContent
