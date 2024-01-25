import React from "react";
import {
	Box,
	Card,
	CardContent,
	Typography,
	CardActions,
	Button,
	CardMedia,
} from "@mui/material";

export const CardMui = () => {
	return (
		<Box width="300px" marginTop="2em">
			<Card>
				<CardMedia
					component="img"
					height="140"
					image="https://source.unsplash.com/random"
					alt="unsplash"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						REACT
					</Typography>

					<Typography variant="body2" color="text.secondary">
						LKLKLKZZZZZZZZZZZZ JJJRNRKJNRKNRKRKRNRKRN
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small">Share</Button>
					<Button size="small">Learn</Button>
				</CardActions>
			</Card>
		</Box>
	);
};
export default CardMui;
