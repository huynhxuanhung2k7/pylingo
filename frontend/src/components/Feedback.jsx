export default function Feedback({ feedback }) {
  if (!feedback) return null;
  return (
    <div className="mt-1 text-sm">
      {feedback.success ? '✅' : '❌'} {feedback.msg}
    </div>
  );
}
