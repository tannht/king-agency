import "./NewProjectButton.scss";
import { Slide, Dialog } from "@material-ui/core";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import NewProjectForm from "./NewProjectForm";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="bottom" ref={ref} {...props} />;
});

const NewProjectButton = () => {
	const [isNewProjectOpen, setIsNewProjectOpen] = useState(false);
	const backgroundModal = {
		minHeight: "100vh",
		background: `linear-gradient(90deg, rgba(8,94,114, 0.6), rgba(8,94,114, 0.8)), 
        url('https://images.unsplash.com/photo-1499854413229-6d1c92ff39ef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')`,
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		backgroundSize: "cover",
	};
	return (
		<>
			<button
				onClick={() => {
					setIsNewProjectOpen(true);
				}}
				className="button-start-project-modal"
			>
				<div className="btn-overlay"></div>
				<span>Start Your Project</span>
			</button>
			<Dialog
				fullScreen
				open={isNewProjectOpen}
				onClose={() => setIsNewProjectOpen(false)}
				TransitionComponent={Transition}
			>
				<div style={backgroundModal}>
					<div
						style={{
							cursor: "pointer",
							color: "white",
							display: "flex",
							width: "90px",
							margin: "8% auto 4% auto",
						}}
						className="subscribe-close"
						onClick={() => setIsNewProjectOpen(false)}
					>
						<FaTimes
							className="subscribe-modal-icon"
							style={{
								display: "block",
								// margin: "30px auto",
								width: "40px",
								height: "40px",
							}}
						/>
						<span
							style={{
								margin: "auto 0px",
								fontWeight: "700",
								fontSize: "18px",
								textTransform: "uppercase",
							}}
						>
							Close
						</span>
					</div>
					<NewProjectForm />
				</div>
			</Dialog>
		</>
	);
};

export default NewProjectButton;
