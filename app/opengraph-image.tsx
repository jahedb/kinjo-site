import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
width: 1200,
height: 630,
};

export const contentType = "image/png";

export default function Image() {
return new ImageResponse(
(
<div
style={{
background: "#F0F4EC",
width: "100%",
height: "100%",
display: "flex",
alignItems: "center",
justifyContent: "center",
fontSize: 64,
fontWeight: 600,
color: "#344E41",
}}
>
Kinjo
<div style={{ fontSize: 32, marginTop: 20 }}>
Private Neighbourhood Platform </div> </div>
),
{
...size,
}
);
}
