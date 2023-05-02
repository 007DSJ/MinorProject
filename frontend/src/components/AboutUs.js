import React from 'react';
import Faq from './FaqAccordion'

import '../App.css'

function aboutus() {


    return (
        <div className="container">
            <div className='content-area'>

                {/* about us  CONTENT*/}

                <section className='about-us pb-2'>
                    <div >
                        <h1 className='text-center pb-4 pt-4'>About Us</h1>
                        <p>Pack&Move is one of India's trusted relocation service booking portals providing the highest standards of relocation and transport related services and also aiming in developing safe and cost-efficient relocation and transportation solutions for customers. Our goal is to work as a bridge between customers and professional logistics & transport companies (including packers and movers) to foster the culture of safety, service and trust.</p>
                        <p>The packers and movers provided by Pack&Move are experienced and knowledgeable professionals who have the skills and equipment needed to safely and efficiently move customer's possessions from one location to another. </p>
                        <p>In conclusion, Pack&Move is a one-stop shop for all customer's home and event-related needs. With a range of services designed to make moving, interior design, and property management as stress-free as possible, Pack&Move is the perfect choice for anyone who needs a little extra help with their homes and events.</p>
                    </div>

                    {/* <div >
                                    <h3 className=' text-center pb-4 pt-4'>Are You a Business or Service Provider?</h3>
                                    <p>If you are a business or service provider and looking for genuine customers that want your services then you can join hands with us. We are looking for licensed genuine businesses and service-providing companies that are credible and experienced.</p>
                                    <p>Getting registered with this portal means you will get manifold benefits, receive OTP-verified genuine leads, boost your brand, maximize business exposures, and grow your business.</p>
                                </div> */}

                </section>

                <hr className="hr" />


                {/* WHY-US */}


                <section className='why-us p-3 '>
                    <div>
                        <h1 className='text-center pb-4'>Why Choose Us?</h1>
                    </div>
                    <div className="whyus row row-col-2">
                        <div className="col-sm-12 col-md-4 ">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Safe & Compliance</h5>
                                    <p className="card-text">Pack&Move relocates your household with complete safety and assurance. Get extra assurance with insurance,
                                        high-quality packing materials and skilled human resources.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Cost Saving</h5>
                                    <p className="card-text">The right type of packing material respective to goods from a skilled and trained workforce,
                                        transport chain and modern technology will save money. Right, consultation for moving to make it easier.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">End to End Service Solution</h5>
                                    <p className="card-text">Starting from scratch to settle at your destination we offer complete services where you can
                                        relocate your household, furniture, electronics, and vehicles to your new place.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="whyus row">

                        <div className="col-sm-12 col-md-4 ">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Storage & Warehouse Facility</h5>
                                    <p className="card-text">Get up to 30 days of absolutely free storage and warehouse facility from us.
                                        You can store your belonging with us for upto 30 days free while taking our packing and moving service.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Advanced Tool & Modern Shifting Method</h5>
                                    <p className="card-text">For complete safety and extra protection, we use advanced tools and modern
                                        technology for packing and shifting households to your desired destination.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4  ">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Skilled Staff & Premium Packing Material</h5>
                                    <p className="card-text">Pack&Move solving packing and moving issues with their well-trained
                                        staff and world-class packing materials. We use multilayer packing for the safest relocation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="hr" />


                {/* timeline */}


                <section className='process-timeline' >
                    <div className="container p-2">
                        <div>
                            <h1 className='text-center pt-3 pb-4'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;How We Operate</h1>
                        </div>
                        <div className="main-timeline">
                            <div className="timeline timeline-left">
                                <div className="card">
                                    <div className="card-body p-4">
                                        <h3>1. Survey</h3>
                                        <p className="mb-0">Schedule a visit from our move coordinator to get a free estimate
                                            After reviewing the estimate, schedule a moving date with your coordinator</p>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline timeline-right">
                                <div className="card">
                                    <div className="card-body p-4">
                                        <h3>2. Packing</h3>
                                        <p className="mb-0">We have a rigorous packing process in place & use the best packing materials
                                            Dedicated & qualified crew handles the process end-to-end
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline timeline-left">
                                <div className="card">
                                    <div className="card-body p-4">
                                        <h3>3. Inventory</h3>
                                        <p className="mb-0">We always provide a full itemisation of your belongings.
                                            We seek your approval on the number & condition of items before dispatching them.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline timeline-right">
                                <div className="card">
                                    <div className="card-body p-4">
                                        <h3>4. Transport</h3>
                                        <p className="mb-0">Our dedicated fleet of vehicles can move any volume of goods to a place of your choice
                                            We use only closed container vehicles to ensure maximum safety during transport</p>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline timeline-left">
                                <div className="card">
                                    <div className="card-body p-4">
                                        <h3>5. Unpacking</h3>
                                        <p className="mb-0">We unpack your belongings systematically and with utmost care.
                                            We also tidy the place after unpacking to make your stay comfortable.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline timeline-right">
                                <div className="card">
                                    <div className="card-body p-4">
                                        <h3>6. Handing Over
                                        </h3>
                                        <p className="mb-0">We unpack your belongings systematically and with utmost care.
                                            We also tidy the place after unpacking to make your stay comfortable.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="hr" />


                {/* FAQ */}


                <section className='FAQ pb-4'>

                    <div>
                        <div>
                            <h1 className='text-center pt-3 pb-4'>Frequently Asked Questions</h1>
                        </div>

                        <Faq ques={"What are Packers and Movers Charges in India?"} >
                            <br />
                            <p>Moving home? Want to hire professional packing and moving services? We are pretty sure that you have many questions in your mind regarding packers and movers charges.</p>
                            <p>Many times, people ask us how much does it cost to hire a moving company. And our answer is always the same; the cost of packers and movers is not fixed. For example, you can see differences in the prices of 3 different movers and packers.</p>
                            <p>Usually, you can also see price differences in the prices of packers and movers from different cities. For example, if a moving company in Delhi provides 1 BHK local shifting service at Rs. 4,500, a moving company in Bangalore can charge you Rs. 4,900.</p>
                            <p>One thing to keep in mind is that the relocation cost varies case by case and company by company. Besides, there are several factors that determine the costs of hiring movers and packers.</p>
                            <p>You might be thinking about the approximate packers and movers charges so that you can budget your move accordingly. No worries. Regardless of the fact that moving charges are not fixed, the approximate packers and movers costs can be calculated.</p>
                            <p>As a rule, <strong>professional packers and movers in India charge in the range of Rs. 4,000 - 20,000 for local shifting</strong>. This price range is estimated based on 1 to 3 BHK homes. It means that the shifting price will differ for 1 BHK, 2 BHK, and 3 BHK. If you can pack your belongings on your own, you can save around Rs. 1,300 - 6,500 because the movers will not charge for the packing service.</p>
                            <p>For example, you want to hire packers and movers in Delhi for 1 BHK shifting. The estimated price for the full moving service will be in the range of Rs. 4,000 - 11,000. If you pack your goods by yourself, then you can save around Rs. 1,300 - 3500. And your price will be around Rs. 2,700 - 7,500. Undoubtedly, self-packing will save you money, but it can be risky. We always recommend getting a professional packing service to ensure the safety of goods in transit.</p>
                            <p>In the event that you are moving from one city to another, they will charge higher than local shifting services. Usually, they <strong>charge around Rs. 11,000 to Rs. 60,000 for 1 to 4 BHK intercity moving</strong>. For example, if you are moving 1 BHK home from one city to another for a distance of 875 km, then the approximate intercity packers and movers charges will be around Rs 16,325 - 24,400. The price will vary depending on the distance and the size of your home. Other factors will also influence the cost of intercity or interstate packers and movers, we are pretty sure of that.</p>
                            <p>Professional packers and movers will also levy additional fees if you demand additional services such as warehousing, furniture dismantling  & assembly, bike shifting, car transportation, etc.</p>
                            <p>Now we discuss the packers and movers charges for different types and circumstances of moves.</p>
                        </Faq>
                        <Faq ques='How Much Do Local Packers and Movers Cost?'>
                            <p>Moving home within a city can be far cheaper than moving from one city to another by virtue of the reduced travel time in the shifting process.</p>
                            <p>In the process of a local move, the moving crew packs the necessary items only because there is hardly a chance of damages to the goods in transit.</p>
                            <p>In general terms, <strong>local moving is cheaper than long-distance moving</strong>. But it is not always true. Off and on, intercity moving can be cheaper than local moving. The reason is the total volume  & weight of items you want to shift. For example, a long-distance moving with a few items can be cheaper than moving locally with a 5+ BHK family house.</p>
                            <p>So, what will be the approximate packers and movers charges for local shifting?</p>
                            <p>If you are moving down the street or from one locality to another within the same city, local packers and movers charges range from Rs. 4,000 to Rs. 20,000.</p>
                            <p>You might be interested in knowing the price breakups according to the size of your home. For example,</p>
                            <ul>
                                <li>How much does a moving company cost if you are moving out of a 1 BHK home?</li>
                                <li>How much does a moving company cost if you are moving out of a 2 BHK home?</li>
                                <li>How much does a moving company cost if you are moving out of a 3 BHK home?</li>
                            </ul>
                            <p>Depending on the size of the home (total weight  & volume of household items), the packers and movers charges for local shifting are as follows.</p>
                            <ul>
                                <li>1 BHK home shifting approximate costs: Rs. 4,000 - 11,000</li>
                                <li>2 BHK home shifting approximate costs: Rs. 6,500 - 16,000</li>
                                <li>3 BHK home shifting approximate costs: Rs. 10,000 - 20,000</li>
                            </ul>
                            <p>The below price chart will give you more clear information about the packers and movers charges for local shifting.</p>
                            <h4>Local Packers and Movers Price List</h4>
                            <div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><strong>Price Breakup/Move Size</strong></td>
                                            <td><strong>1 BHK (Standard - Big)</strong></td>
                                            <td><strong>2 BHK (Standard - Big)</strong></td>
                                            <td><strong>3 BHK (Standard - Big)</strong></td>
                                        </tr>
                                        <tr>
                                            <td><strong>Packing Costs</strong></td>
                                            <td>Rs. 1,300 - 3500</td>
                                            <td>Rs. 1,600 - 4600</td>
                                            <td>Rs. 3,200 - 6,500</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Labour Charges</strong></td>
                                            <td>Rs. 1,100 - 3,000</td>
                                            <td>Rs. 1,400 - 4,400</td>
                                            <td>Rs. 2,800 - 5,500</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Transport Costs</strong></td>
                                            <td>Rs. 1,600 - 4,500</td>
                                            <td>Rs. 3,500 - 7,000</td>
                                            <td>Rs. 4,000 - 8,000</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Approx. Total Costs</strong></td>
                                            <td>Rs. 4,000 - 11,000</td>
                                            <td>Rs. 6,500 - 16,000</td>
                                            <td>Rs. 10,000 - 20,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Faq>

                        <Faq ques='How Much Do Intercity / Interstate Packers and Movers Charge?'>
                            <p>Moving from one city to another? Or, crossing the state border? A long-distance move can be an expensive affair. However, there are certain ways through which you can keep the cost reasonable.</p>
                            <p>The cost of hiring intercity packers and movers is something that can make you think again about your move. Are you serious about your intercity/interstate move? If yes then it 's fine. We are pretty sure that you have decided to move to a new city thoughtfully. The only concern you have in your mind is how much it costs to move from one city to another.</p>
                            <p>Do you know how much your long-distance move will cost? Do you know how much your interstate packers and movers will charge? You need to understand all this very well so that you do not have any further financial problems. So, what do you understand? If you want to know about the intercity relocation charges, then rest assured, we will not disappoint you at all.</p>
                            <p>There will be a huge difference between the cost of local moving and the cost of intercity/interstate moving. And the reason is obvious. Guess what? It is the distance between the two cities. In general terms, intercity or interstate movers and packers will consider the distance between both places before giving you the cost estimates. The size of your home, fundamentally the total volume  & weight of items, will also affect the cost of interstate house moving.</p>
                            <p>By and large, intercity or interstate packers and movers charge by the total weight & volume of items and the distance travelled in transit. The approximate cost of moving house from one city to another can range from Rs. 11,000 to Rs. 56,000 for 1 to 4 BHK apartments. The price will vary depending on the size and distance of the move. See the price chart below to know more about the packers and movers charges for intercity/interstate relocation.</p>
                            <h5>Intercity / Interstate Packers and Movers Price List</h5>
                            <div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><strong>Move Type/Distance</strong></td>
                                            <td><strong>100 - 350 km</strong></td>
                                            <td><strong>350 - 750 km</strong></td>
                                            <td><strong>750 - 1200 km</strong></td>
                                            <td><strong>1200 - 1700 km</strong></td>
                                            <td><strong>1700 - 2300 km</strong></td>
                                            <td><strong>2300 - 3000 km</strong></td>
                                        </tr>
                                        <tr>
                                            <td>1 BHK</td>
                                            <td>Rs. 11,000 - 21,000</td>
                                            <td>Rs. 13,500 - 22,500</td>
                                            <td>Rs. 15,500 - 25,500</td>
                                            <td>Rs. 18,500 - 27,000</td>
                                            <td>Rs. 21,000 - 30,000</td>
                                            <td>Rs. 23,450 - 36,700</td>
                                        </tr>
                                        <tr>
                                            <td>2 BHK</td>
                                            <td>Rs. 15,000 - 25,000</td>
                                            <td>Rs. 17,500 - 28,500</td>
                                            <td>Rs. 20,000 - 31,000</td>
                                            <td>Rs. 23,000 - 36,000</td>
                                            <td>Rs. 27,000 - 40,000</td>
                                            <td>Rs. 29,300 - 45,850</td>
                                        </tr>
                                        <tr>
                                            <td>3 BHK</td>
                                            <td>Rs. 18,000 - 30,000</td>
                                            <td>Rs. 21,000 - 34,000</td>
                                            <td>Rs. 23,500 - 38,000</td>
                                            <td>Rs. 27,500 - 42,000</td>
                                            <td>Rs. 32,000 - 48,000</td>
                                            <td>Rs. 35,250 - 54,640</td>
                                        </tr>
                                        <tr>
                                            <td>4+ BHK/Villa</td>
                                            <td>Rs. 22,500 - 34,500</td>
                                            <td>Rs. 26,000 - 39,000</td>
                                            <td>Rs. 29,000 - 45,000</td>
                                            <td>Rs. 34,000 - 47,500</td>
                                            <td>Rs. 38,000 - 55,000</td>
                                            <td>Rs. 41,000 - 60,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Faq>


                        <Faq ques='What are the Charges for Car  & Bike Transportation Services?'>
                            <p>In the case of intercity or interstate moves, people often need professional services for vehicle transportation. For example, if you need to move your bike from Delhi to Bangalore, then you cannot drive it yourself. You will look for someone that can transport your bike safely from Delhi to Bangalore.</p>
                            <p>Similarly, it would be extremely difficult to drive a car from one city to another far distant city. Imagine you need to take your car from Patna to Chennai. Would you like to drive the car or hire a professional car transport service? We are pretty sure that you will go with hiring a professional vehicle transportation service.</p>
                            <p>The only concern you will have in mind is how much the moving company will charge for transporting the car. But you have nothing to worry about, we will let you know the approximate charges for transporting a car or a bike from one city to another.</p>
                            <p>By and large, professional packers and movers or independent transport companies charge by the type of vehicle and the distance between the two cities.</p>
                            <p>For example, car transportation charges will range from Rs. 9,000 - 17,000 for a distance of 750 - 1200 km. And the bike transportation costs will range from Rs. 4,500 - 9,000 for 750 - 1200 km distance.</p>
                            <p>Below is the price chart that will clearly give you an idea about transporting a vehicle from one city to another based on the distance.</p>
                            <h5>Car  & Bike Transportation Price Chart</h5>
                            <div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><strong>Move Type/Distance</strong></td>
                                            <td><strong>100 - 350 km</strong></td>
                                            <td><strong>350 - 750 km</strong></td>
                                            <td><strong>750 - 1200 km</strong></td>
                                            <td><strong>1200 - 1700 km</strong></td>
                                            <td><strong>1700 - 2300 km</strong></td>
                                            <td><strong>2300 - 3000 km</strong></td>
                                        </tr>
                                        <tr>
                                            <td>4-Wheeler (Car)</td>
                                            <td>Rs. 5,500 - 11,000</td>
                                            <td>Rs. 7,500 - 14,000</td>
                                            <td>Rs. 9,000 - 17,000</td>
                                            <td>Rs. 11,000 - 20,000</td>
                                            <td>Rs. 13,000 - 23,000</td>
                                            <td>Rs. 15,000 - 26,000</td>
                                        </tr>
                                        <tr>
                                            <td>2-Wheeler (Bike)</td>
                                            <td>Rs. 2,800 - 5,800</td>
                                            <td>Rs. 3,500 - 7,000</td>
                                            <td>Rs. 4,500 - 9,000</td>
                                            <td>Rs. 6,500 - 12,000</td>
                                            <td>Rs. 7,000 - 12,500</td>
                                            <td>Rs. 8,000 - 15,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p><strong>NB:</strong> The actual price of car and bike transportation from one city to another will vary. Your movers will estimate the cost depending on the type and size of your vehicle. The choice of car/bike carrier will also influence the rates.</p>
                        </Faq>
                        <Faq ques='What are the Warehousing and Storage Rates in India?'>
                            <p>Warehousing  & storage service is one of the value-added services provided by most movers and packers in India. On a move, you may need a warehousing  & storage service. There can be several reasons behind this.</p>
                            <p>For example, you have given your landlord a notice to vacate the home on a particular date. But unfortunately, you have not found a new home on that day. In this case, you can arrange a hotel or lodge for your stay. But what about your belongings? This is where warehousing  & storage service comes in handy.</p>
                            <p>There can be your own reason for the storage and warehousing of your household items. If you need a household storage service, then you might be interested in knowing the warehousing  & storage charges. The cost of warehousing services may vary from one city to another. How much stuff you want to keep in a warehouse will determine the cost.</p>
                            <p>For example, the storage cost of 1 BHK (approx. 20 boxes) will be roughly Rs. 3000 per month. If you need storage for 3 BHK household items (approx. 30 boxes), the cost will be around 4,000. This is a rough idea about the costs of warehousing  & storage services.</p>
                            <p>The actual price may vary case by case, company by company, and location by location. The total volume or the number of household items  & boxes will influence the cost of storage per month. See the price chart below to have more idea about the prices for storage services.</p>
                            <h5>Warehousing  & Storage Price Chart</h5>
                            <div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><strong>Warehousing  & Storage</strong></td>
                                            <td><strong>Storage Charges</strong></td>
                                            <td><strong>Approx. No. of Boxes</strong></td>
                                        </tr>
                                        <tr>
                                            <td>1 BHK Household Items</td>
                                            <td>Rs. 3,000 per month</td>
                                            <td>20</td>
                                        </tr>
                                        <tr>
                                            <td>2 BHK Household Items</td>
                                            <td>Rs. 4,000 per month</td>
                                            <td>30</td>
                                        </tr>
                                        <tr>
                                            <td>3 BHK Household Items</td>
                                            <td>Rs. 5,500 per month</td>
                                            <td>40</td>
                                        </tr>
                                        <tr>
                                            <td>4 BHK Household Items</td>
                                            <td>Rs. 6,500 per month</td>
                                            <td>50</td>
                                        </tr>
                                        <tr>
                                            <td>Small Box</td>
                                            <td>Rs. 300 per month</td>
                                            <td>NA</td>
                                        </tr>
                                        <tr>
                                            <td>Medium Box</td>
                                            <td>Rs. 500 per month</td>
                                            <td>NA</td>
                                        </tr>
                                        <tr>
                                            <td>Large Box</td>
                                            <td>Rs. 600 per month</td>
                                            <td>NA</td>
                                        </tr>
                                        <tr>
                                            <td>Scooter/Bike storage</td>
                                            <td>Rs. 800 - 1,500 per month</td>
                                            <td>NA</td>
                                        </tr>
                                        <tr>
                                            <td>Car storage (Hatchback)</td>
                                            <td>Rs. 2,500 - 3,200 per month</td>
                                            <td>NA</td>
                                        </tr>
                                        <tr>
                                            <td>Car storage (Sedan)</td>
                                            <td>Rs. 3,200 - 4,000 per month.</td>
                                            <td>NA</td>
                                        </tr>
                                        <tr>
                                            <td>Car storage (SUV)</td>
                                            <td>Rs. 4,200 - 5,200 per month</td>
                                            <td>NA</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Faq>


                        <Faq ques='What Factors Affect Packers and Movers Charges?'>
                            <p>We hope the above price charts will give you an idea about what amount you will have to your move. You see that there are irregular pricing structures for the different services offered by the movers and packers. Why so? What are the factors that chiefly influence the costs of moving services? We are pretty sure that you are interested in knowing the same.</p>
                            <p>The cost of hiring professional packers and movers will usually depend on different factors that are as follows.</p>

                            <h5 className='subheading'>Distance travelled</h5>
                            <p>This is about the distance to be travelled in transit. It is one of the main factors, especially in long-distance home relocation.</p>
                            <p>As a general rule of thumb, a larger distance will attract more relocation charges. More distance means more travel time and more fuel consumption in transit. Hence, undoubtedly your moving cost will increase as the transit distance increases.</p>

                            <h5 className='subheading'>Moving from and to</h5>
                            <p>Besides the distance, from which city you want to move to and where you are moving will also affect the moving costs. The cost of hiring movers can vary significantly between different locations especially in metropolitan cities like Delhi, Mumbai, Chennai, Hyderabad, Bangalore, etc. We advise you to collect the quotes from movers close to your destination. A nearby moving company can offer you a better quote.</p>
                            <p>Sometimes the price can be different for the same size and distance of the move. For example, a person is moving from Delhi to Agra. Another person is moving from Delhi to Haridwar. Both are moving with 2 BHK household items. And in both circumstances, the transit distance is approximately 223 km.</p>
                            <p>But surprisingly, the cost of moving from Delhi to Agra is cheaper than moving from Delhi to Haridwar. Why this price difference?</p>
                            <p>The demand for the services to the outward destination will affect the costs. The condition of the road will also be a factor. Keep in mind, where moving companies frequently send their trucks, they charge fewer than other routes.</p>

                            <h5 className='subheading'>Total volume of belongings</h5>
                            <p>Most Indian packers and movers will estimate the relocation costs based on the total volume or weight  & number of items. As a rule of thumb, the more items you will have to move, the more charges you will have to pay the movers. The cost will increase because the movers will need more time to handle the shifting process. They will also need more packing materials and boxes. A bigger transport vehicle will be also required. Hence, it is not a surprise that your moving cost will increase if the volume of goods increases.</p>

                            <h5 className='subheading'>Size of home</h5>
                            <p>Some packers and movers companies also provide a rough estimate based on the size of the move, for example, 1 BHK shifting, 2 BHK shifting, 3 BHK shifting, Villa shifting, etc.</p>

                            <h5 className='subheading'>Nature and types of goods</h5>
                            <p>What types of items do you have to shift? What is the nature of your belongings? The type and nature of items will considerably affect the relocation costs.</p>
                            <p>For example, if you have only fragile items to shift or most items in your move are fragile items then movers will ask premium charges for the same.</p>
                            <p>It is because, handling fragile items calls for special care, proper handling, and expert  & robust packing to avoid the risk of damages in transit.</p>
                            <p>Fragile items such as silverware, fine chinaware, artworks, glassware, etc. require robust packing in special quality packing materials and boxes.  So, it is likely that movers and packers will levy a high price.</p>

                            <h5 className='subheading'>Quantity & quality of packing supplies</h5>
                            <p>The choice and quantity of packing materials for the move will affect the packers and movers costs. Packing household items must be done in the correct packing supplies and sturdy moving boxes. Professional moving companies use different types of packing supplies and boxes depending on the need.<br />On the route where road conditions are not good, there is a special requirement for specific packing materials and boxes. If you are moving to a hilly area, then there would be requirements of robust packing. Robust packaging will protect the goods against jerks and jolts of the vehicle in transit.</p>
                            <p>If you are moving in the rainy season, then there would be a requirement for waterproof packing. And it is certain that the moving company will charge an additional fee for waterproof packaging. If you have to shift with fragile items, you might see the high cost. This is because there is a risk of damage to such items in transit. Therefore, they require special robust packing.</p>
                            <p>As a general rule, the quality of packing materials  & boxes will influence the overall costs. Keep in mind that the more packing materials and boxes required, the more money you have to pay.</p>

                            <h5 className='subheading'>Type and size of truck/tempo</h5>
                            <p>The total volume of goods will be the deciding factor for the size of the transport vehicle used in the transportation of your household belongings. If the bigger truck will be used in the process, then it is likely that it will attract the higher charges.</p>
                            <p>In addition, the type of truck or tempo will also influence the cost of packers and mover'sservices. There will be different prices for containerized trucks and normal trucks. A shared truck will cost you less than the dedicated truck used in your move.</p>

                            <h5 className='subheading'>Men required to handle the shifting process</h5>
                            <p>The manpower involved in handling the shifting process may also influence the charges of packers and movers. The number of men required to handle the moving process will totally depend on the size of your move or the total volume of your belongings.</p>
                            <p>The bigger size of the home means a large volume of goods. And in this case, there will be a need for more manpower to complete the shifting process. Hence, the cost of the shifting will elevate.</p>

                            <h5 className='subheading'>Relocation insurance (optional)</h5>
                            <p>Insurance will considerably influence the costs of hiring intercity or interstate packers and movers. Usually, insurance is not required in a local move. Hence, it won 't be the cost of hiring a local house moving service.</p>
                            <p>Generally, the insurance charge is optional. If you do not opt for this service, then you will not have to pay this additional cost. But moving long-distance is risky without proper relocation insurance. Generally, all-inclusive moving insurance will cost you 3% of the value of the declared goods. You must remember that there are some moving companies that make insurance mandatory.</p>

                            <h5 className='subheading'>Warehousing  & storage, if needed</h5>
                            <p>If you have decided to move and finalized the date of move and till the date of move you did not find your new home, then what you will do. In this case, packers and movers will facilitate you with a warehousing  & storage facility for which you will have to pay.</p>
                            <p>Once you have finalized your new home, the moving company will deliver your goods. This usually falls under the additional services of packers and movers. If you will not opt for this facility then you will not have to pay even a single rupee for this service.</p>

                            <h5 className='subheading'>GST and taxes</h5>
                            <p>If you are relocating from Patna to Chennai, then the truck has to cross the border and enter another state. And this case, toll tax, and Octroi charges will elevate transportation costs, and impact overall all packers and movers charges. GST may also increase the shifting cost.</p>

                            <h5 className='subheading'>Unpacking at destination</h5>
                            <p>Usually, professional packers and movers for a long-distance relocation do not do the task of unpacking. If you need unpacking of your boxes and arrangement of your goods at your destination place, then they will charge you extra.</p>
                            <p>But there are also some moving companies that do unpacking tasks and have all-inclusive charges for unpacking. So, you must make it clear: whether the unpacking cost is included in the overall moving cost or not.</p>

                            <h5 className='subheading'>Time of shifting</h5>
                            <p>The period of shifting can also affect the overall cost of shifting. Some cities have restrictions on the entry of commercial vehicles for a specific time. If you need to get your belongings delivered fast then movers will have to enter in that restricted period and for this, they will have to pay a challan. And this will be added to your overall moving cost.</p>

                            <h5 className='subheading'>Cost of additional services</h5>
                            <p>Many people need handyman services on their move. Generally, professional packers and movers don 't deal with handyman services. But if you need, they can facilitate you electrician, carpenter, or plumber on the move day. For this, you have to pay extra charges to the handyman service providers.</p>
                        </Faq>
                    </div>
                </section>

                {/* <section>
                    {ques.map(ques => {
                        return (<Faq ques={ques} />)
                    })}
                </section> */}

            </div >
        </div>

    )
}

export default aboutus;