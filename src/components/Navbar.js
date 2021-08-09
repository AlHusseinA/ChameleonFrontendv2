import React from "react";

const Navbar = () => {
    return (
        <div class="sidebar-sticky">
            <ul class="nav flex-column mb-2">
                <li class="nav-item">
                    <a class="nav-link" href="/about">
                        <h6><b>About the project</b></h6>
                    </a>

                    <a class="nav-link active" href="/questionnaire">
                        <h6><b>Questionnaire (est. 5 minutes)</b></h6>
                    </a>
                </li>

            </ul>
        </div>
    );
}

export default Navbar;