import React, { useState, useEffect } from "react";
import {
  Avatar,
  List,
  Text,
  Box,
  Page,
  Button,
  Icon,
  useNavigate,
  Input,
} from "zmp-ui";
import { useRecoilValue } from "recoil";
import { displayNameState, userState } from "../state";

//var geocoder = new google.maps.Geocoder();
// geocoder.geocode({
//   "address": inputAddress
// }, function(results) {
//   console.log(results[0].geometry.location); //LatLng
// });
const UserPage = () => {
  //const { userInfo: user } = useRecoilValue(userState);
  const displayName = useRecoilValue(displayNameState);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: 10.800084, lng: 106.664676 });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoordinates({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    // Handle search logic here
    console.log("Search query:", searchQuery);
  };

  // return (
  //   <Page className="page">
  //     <Box
  //       flex
  //       flexDirection="column"
  //       justifyContent="center"
  //       alignItems="flex-start"
  //     >
  //       <Box flex flexDirection="row" alignItems="center" mb={4}>
  //         <Avatar
  //           story="default"
  //           size={96}
  //           online
  //           src={user.avatar.startsWith("http") ? user.avatar : undefined}
  //         >
  //           {user.avatar}
  //         </Avatar>
  //         <Box ml={4}>
  //           <Text.Title>{displayName || user.name}</Text.Title>
  //           <Button
  //             onClick={() => {
  //               navigate("/form");
  //             }}
  //             size="small"
  //             icon={<Icon icon="zi-edit" />}
  //           />
  //         </Box>
  //       </Box>

  //       {/* Search Bar */}
  //       <Box mb={4} width="100%" flexDirection="row" display="flex" alignItems="center">
  //         <Input
  //           type="text"
  //           placeholder="Search..."
  //           value={searchQuery}
  //           onChange={handleSearchChange}
  //           onKeyDown={(event) => {
  //             if (event.key === "Enter") {
  //               handleSearchSubmit();
  //             }
  //           }}
  //           clearable
  //           style={{ flexGrow: 1 }}
  //         />
  //         <Button
  //           onClick={handleSearchSubmit}
  //           icon={<Icon icon="zi-search" />}
  //         />
  //       </Box>
  //     </Box>
  //     <Box width="100%" height="90%">
  //       <iframe
  //         width="100%"
  //         height="100%"
  //         src={`https://maps.google.com/maps?q=${coordinates.lat},${coordinates.lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
  //         frameBorder="0"
  //         allowFullScreen=""
  //         aria-hidden="false"
  //         tabIndex="0"
  //       />
  //     </Box>
  //   </Page>
  // );
};

export default UserPage;
