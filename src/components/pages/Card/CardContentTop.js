import React from 'react';
import { Card, Typography, Avatar, Statistic } from 'antd'
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons'
import {Data} from './data'

function CardContentTop({from}) {
    
    const { Title } = Typography
    const { Meta } = Card
    const img = {
        total: 'https://cdn0.iconfinder.com/data/icons/simply-orange-1/128/currencysvg-512.png',
        bukalapak : 'https://img.involve.asia/ia_logo/1341_tcT354tH.svg',
        tokopedia : 'https://www.tokotenun.com/wp-content/uploads/2018/05/logo-tokopedia-icon-mascot-400x400.png',
        shoopee: 'https://4.bp.blogspot.com/-ItRaVmM-PoU/XgrlppcnvcI/AAAAAAAABPY/Pbgwlu9Gb7UKLJFekuqk5__OPWQvqq08gCLcBGAsYHQ/s1600/shopee%2B1.png'
    }

    const {bukalapak, tokopedia, shoopee}= Data
    const TotalCurrent = bukalapak.current + tokopedia.current + shoopee.current
    const TotalPrev = bukalapak.prev + tokopedia.prev + shoopee.prev
    const persen = {
        total : ((TotalCurrent - TotalPrev)/ TotalPrev) * 100,
        bukalapak : ((bukalapak.current - bukalapak.prev) /bukalapak.prev) * 100,
        tokopedia : ((tokopedia.current - tokopedia.prev) /tokopedia.prev) * 100,
        shoopee : ((shoopee.current - shoopee.prev) /shoopee.prev) * 100,
    }
    return (
        <div style={{marginTop:'1em'}}>
            <Card hoverable>
                <Meta
                    avatar={<Avatar 
                        src= {
                            from ==='total' ? img.total :
                            from ==='bukalapak' ? img.bukalapak :
                            from ==='tokopedia' ? img.tokopedia :
                            from ==='shoopee' ? img.shoopee : null
                        } />}
                    title=
                    {
                        from ==='total' ? 'Total Revenue' :
                        from ==='bukalapak' ? 'Rev. Bukalapak ':
                        from ==='tokopedia' ? 'Rev. Tokopedia ' :
                        from ==='shoopee' ? 'Rev. Shoopee' : null
                    } 
                />
                <Card style={{marginTop:'1em'}}>
                    <Title level={3}>
                        {
                            from ==='total' ? `Rp ${parseInt(bukalapak.current + tokopedia.current + shoopee.current)} M` :
                            from ==='bukalapak' ? `Rp ${bukalapak.current} M`:
                            from ==='tokopedia' ? `Rp ${tokopedia.current} M` :
                            from ==='shoopee' ? `Rp ${shoopee.current} M` : null
                        }
                    </Title>
                    <Statistic 
                        // title="Active"
                        value=
                        {
                            from ==='total' ? persen.total :
                            from ==='bukalapak' ? persen.bukalapak:
                            from ==='tokopedia' ? persen.tokopedia :
                            from ==='shoopee' ? persen.shoopee: null
                        }
                        precision={2}
                        valueStyle={
                            from ==='total' && persen.total >= 0 ? { color: '#3f8600'} :
                            from ==='bukalapak' && persen.bukalapak >= 0 ? { color: '#3f8600'}:
                            from ==='tokopedia' && persen.tokopedia >= 0 ? { color: '#3f8600'}:
                            from ==='shoopee' && persen.shoopee >= 0 ? { color: '#3f8600'} : { color:'#a8071a' }

                            
                        }
                        prefix=
                        { 
                            from ==='total' && persen.total >= 0 ? <ArrowUpOutlined /> :
                            from ==='bukalapak' && persen.bukalapak >= 0 ? <ArrowUpOutlined />:
                            from ==='tokopedia' && persen.tokopedia >= 0 ? <ArrowUpOutlined />:
                            from ==='shoopee' && persen.shoopee >= 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />
                        }
                        suffix="%"
                    />
                </Card>
                </Card>
        </div>
    )
}

export default CardContentTop
