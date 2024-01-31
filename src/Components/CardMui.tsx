import React from "react";
import {
	Box,
	Card,
	CardContent,
	Typography,
	CardActions,
	Button,
	CardMedia,
	Grid,
} from "@mui/material";

export const CardMui = () => {
	return (
		<Grid container>
			<Grid item xs={2}>
				<Box width="300px" height="180px" mt="2em">
					<Card>
						<CardMedia
							component="img"
							height="140"
							image="https://source.unsplash.com/random"
							alt="unsplash"
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="div"
							>
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
			</Grid>
			<Grid item xs={2}>
				<Box width="300px" height="180px" mt="2em">
					<Card>
						<CardMedia
							component="img"
							height="140"
							image="https://source.unsplash.com/random"
							alt="unsplash"
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="div"
							>
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
			</Grid>
			<Grid item xs={2}>
				<Box width="300px" height="180px" mt="2em">
					<Card>
						<CardMedia
							component="img"
							height="140"
							image="https://source.unsplash.com/random"
							alt="unsplash"
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="div"
							>
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
			</Grid>
			<Grid item xs={2}>
				<Box width="300px" height="180px" mt="2em">
					<Card>
						<CardMedia
							component="img"
							height="140"
							image="https://source.unsplash.com/random"
							alt="unsplash"
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="div"
							>
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
			</Grid>
		</Grid>
	);
};
export default CardMui;
