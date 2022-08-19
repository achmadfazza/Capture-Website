export default function LoadingSpinner() {
	return (
		<div className="flex h-screen w-screen sm:h-screen sm:w-screen items-center justify-center space-x-2 bg-slate-400">
			<div className="w-40 h-40 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>
		</div>
	);
}
