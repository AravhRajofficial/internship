import React from "react";
import styled from "styled-components";

const Th = styled.th`
    border: 0.1px solid #000;
    padding: 7px 25px;
    background-color: #000;
    color: #fff;
`;
const Td = styled.td`
    border: 0.1px solid #000;
    padding: 4px 25px;
    text-align: center;
`;
const First = () =>{
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <Th>Sno</Th>
                        <Th>Name</Th>
                        <Th>Father's Name</Th>
                        <Th>Mobile</Th>
                        <Th>Email ID</Th>
                        <Th>Address</Th>
                        <Th>Course</Th>
<Th>Session</Th>
                        <Th>Status</Th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <Td>1</Td>
                        <Td>Test</Td>
                        <Td>Test</Td>
                        <Td>9910201010</Td>
                        <Td>test@gmail.com</Td>
                        <Td>Kolkata</Td>
                        <Td>BCA</Td>
                        <Td>2020-23</Td>
                        <Td><button>Active</button></Td>
                    </tr>
                    <tr>
                        <Td>2</Td>
                        <Td>Test</Td>
                        <Td>Test</Td>
                        <Td>9910201010</Td>
                        <Td>test@gmail.com</Td>
                        <Td>Kolkata</Td>
                        <Td>BCA</Td>
                        <Td>2020-23</Td>
                        <Td><button>In-active</button></Td>
                    </tr>
                    <tr>
                        <Td>3</Td>
                        <Td>Test</Td>
                        <Td>Test</Td>
                        <Td>9910201010</Td>
                        <Td>test@gmail.com</Td>
                        <Td>Kolkata</Td>
                        <Td>BCA</Td>
                        <Td>2020-23</Td>
                        <Td><button>Active</button></Td>
                    </tr>
                    <tr>
                        <Td>4</Td>
                        <Td>Test</Td>
                        <Td>Test</Td>
                        <Td>9910201010</Td>
                        <Td>test@gmail.com</Td>
                        <Td>Kolkata</Td>
                        <Td>BCA</Td>
                        <Td>2020-23</Td>
                        <Td><button>In-active</button></Td>
                    </tr>
                    <tr>
                        <Td>5</Td>
                        <Td>Test</Td>
                        <Td>Test</Td>
                        <Td>9910201010</Td>
                        <Td>test@gmail.com</Td>
                        <Td>Kolkata</Td>
                        <Td>BCA</Td>
                        <Td>2020-23</Td>
                        <Td><button>Active</button></Td>
                    </tr>
                    <tr>
                        <Td>6</Td>
                        <Td>Test</Td>
                        <Td>Test</Td>
                        <Td>9910201010</Td>
                        <Td>test@gmail.com</Td>
                        <Td>Kolkata</Td>
                        <Td>BCA</Td>
                        <Td>2020-23</Td>
                        <Td><button>In-active</button></Td>
                    </tr>
                    <tr>
                        <Td>7</Td>
                        <Td>Test</Td>
                        <Td>Test</Td>
                        <Td>9910201010</Td>
                        <Td>test@gmail.com</Td>
                        <Td>Kolkata</Td>
                        <Td>BCA</Td>
                        <Td>2020-23</Td>
                        <Td><button>Active</button></Td>
                    </tr>
                    <tr>
                        <Td>8</Td>
                        <Td>Test</Td>
                        <Td>Test</Td>
                        <Td>9910201010</Td>
                        <Td>test@gmail.com</Td>
                        <Td>Kolkata</Td>
                        <Td>BCA</Td>
                        <Td>2020-23</Td>
                        <Td><button>In-active</button></Td>
                    </tr>
                    <tr>
                        <Td>9</Td>
                        <Td>Test</Td>
                        <Td>Test</Td>
                        <Td>9910201010</Td>
                        <Td>test@gmail.com</Td>
                        <Td>Kolkata</Td>
                        <Td>BCA</Td>
                        <Td>2020-23</Td>
                        <Td><button>Active</button></Td>
                    </tr>
                    <tr>
                        <Td>10</Td>
                        <Td>Test</Td>
                        <Td>Test</Td>
                        <Td>9910201010</Td>
                        <Td>test@gmail.com</Td>
                        <Td>Kolkata</Td>
                        <Td>BCA</Td>
                        <Td>2020-23</Td>
                        <Td><button>In-active</button></Td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default First;