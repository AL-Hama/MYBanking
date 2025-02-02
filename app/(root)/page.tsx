import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

const Home = () =>{
    const loggedIn = {firstName: "Mohammed", lastName: "Osman", email: "contact@Hama.com"};

    return (<section className="home">
        <div className="home-content">
            <header className="home-header">

                <HeaderBox 
                type = "greeting"
                title = "welcome"
                user = {loggedIn?.firstName || 'Guest'}
                subtext = "Access and manage your account and transaction efficiently."
                />

                <TotalBalanceBox 
                accounts = {[]}
                totalBanks = {1}
                totalCurrentBalance = {1250.35}
                />
            </header>
            RECENT TRANSACTION
        </div>

        <RightSidebar 
        user = {loggedIn}
        transactions = {[]}
        banks = {[{currentBalance: 100.23},{currentBalance: 2230.543}]}
        />
    </section>)
}

export default Home