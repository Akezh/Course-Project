import React, {FC, useState, useEffect, useCallback, useMemo} from 'react'
import CustomDropdown from '../../molecules/CustomDropdown/component'
import axios from 'axios'

interface hotelData {
    readonly name?: string; // SALAM ALEIKYM 
    readonly description?: string;
    readonly price?: string
    readonly imageUrl?: string;
    readonly onClick?: () => void;
}

export const SearchPage: FC = () => {
    const [hotelName, setHotelName] = useState('')
    const [country, setCountry] = useState('')
    const [features, setFeatures] = useState<Array<string>>([])
    const [cost, setCost] = useState(0)
    const [srt, setSrt] = useState('Sort By')
    const services = useMemo(() => ["SPA", "Swimming Pool", "Bowling", "Yacht"], [])
    const sortBy = useMemo(() => ["Alphabetically Ascending", "Alphabetically Descending", "Cost Ascending", "Cost Descending"], [])
    
    const [serverData, setServerData] = useState<hotelData[]>([]);

    const setSort = useCallback((sortbythis: string) => {
            setSrt(sortbythis)
        },
        [srt],
    )

    const push = useCallback((feat: string) => { 
        const hasFeature = features.find((n) => n === feat)
        if (!hasFeature) {
            setFeatures((prev) =>  [...prev, feat])
            console.log(features)
        }
        
    }, [features])

    console.log(features)
    useEffect( () => {
        

        let dataFromReq: hotelData[] = [{
            name: 'ASD',
            description: 'ASDD',
            price: '228$',
            imageUrl: 'https://',
            onClick: () => {}
        }, 
        {
            name: 'qwe',
            description: 'qwee',
            price: '2282$',
            imageUrl: 'https://asd',
            onClick: () => {}
        }] 
        
        setServerData(dataFromReq);
    }, [])
    console.log(serverData)
    return (
        <div className = "container">  
                <div>
                    {serverData[0] && serverData[0].name}
                    {/* {dataFromReq.map((kek: hotelData, i: number) => (
                        <div key = {i}>{kek} </div>
                    ))} */}
                    <div className = "tw-font-bold tw-inline-block">
                        <div className = "tw-ml-4">
                            Hotel Name
                        </div>
                        <input type = "text" placeholder = "  hotel name" onChange = {(e) => setHotelName(e.target.value)} className = "tw-border-solid tw-border-2 tw-rounded-2xl tw-inline-block" style = {{backgroundColor: "#F7F7F7"}}></input>
                        
                    </div>

                    <div className = "tw-font-bold tw-inline-block tw-ml-5">
                        <div className = "tw-ml-4">
                            Country 
                        </div>
                        <input type = "text" placeholder = "  country" onChange = {(e) => setCountry(e.target.value)} className = "tw-border-solid tw-border-2 tw-rounded-2xl tw-inline-block tw-w-64" style = {{backgroundColor: "#F7F7F7"}}></input>
                        
                    </div>
                    <div className = "tw-font-bold tw-inline-block tw-ml-5">
                        <div className = "tw-ml-4">
                            Features
                        </div>
                        <CustomDropdown onDropClick = {push} items = {services} name = "Features"/>
                    </div>
                    <div className = "tw-inline-block ">
                        
                        {features.map((item, i) => ( <div key = {i} className = "tw-font-bold tw-inline-block tw-ml-4 btn btn-outline-secondary">{item}</div>))}
                    </div>
                </div>
                <div>
                    <div className = "tw-font-bold tw-inline-block tw-ml">
                        <div className = "tw-ml-4">
                            Cost range
                        </div>
                        <input type = "number" placeholder = "  cost" onChange = {(e) => setCost(Number(e.target.value))} className = "tw-border-solid tw-border-2 tw-rounded-2xl tw-inline-block" style = {{backgroundColor: "#F7F7F7"}}></input>
                        
                    </div>
                    <div className = "tw-font-bold tw-inline-block tw-ml-5">
                        <div className = "tw-ml-4">
                            Sort by
                        </div>
                        <CustomDropdown onDropClick = {setSort} items = {sortBy} name = {srt}/>

                        
                    </div>
                    <div className = "tw-font-bold tw-inline-block tw-ml-5 tw-w-48">
                        <button className = "tw-border-solid tw-border-2 tw-rounded-2xl tw-inline-block tw-w-64 tw-text-center" style = {{backgroundColor: "#F7F7F7"}}>
                            Search
                        </button>
                        
                    </div>
                    <hr className = "tw-mt-5 tw-mb-5" />

                </div>
                <div>
                    {/* {dataFromReq} */}




                    <hr className = "tw-mt-5 tw-mb-5" />
                </div>
        </div>
    )
}
export default SearchPage

