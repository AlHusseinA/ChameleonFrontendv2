import React from "react";

const Navbar = () => {
    return (
        <div class="sidebar-sticky">
            <ul class="nav flex-column mb-2">
                <li class="nav-item">
                    <a class="nav-link active" href="https://forms.office.com/Pages/ResponsePage.aspx?id=rRkrjJxf1EmQdz7Dz8UrP3otb1bby4RLqkR-2JPUdRdUNjZWNk1FVzQ0QjkxUDBaSTROSE5XWFBRWC4u">
                        <h6><b>Questionnaire (est. 6 minutes)</b></h6>
                    </a>
                    <a class="nav-link" href="/faqs">
                        <h6><b>Frequently Asked Questions</b></h6>
                    </a>
                    <a class="nav-link" href="/about">
                        <h6><b>About the project</b></h6>
                    </a>
                </li>

            </ul>
        </div>
    );
}

export default Navbar;