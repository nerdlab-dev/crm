import assert from "node:assert/strict";
import test from "node:test";
import { installMcp } from "../src/install.js";

for (const client of [null, "codex", "claude"]) {
  test(`공통 npm 패키지에 설치를 위임한다: ${client ?? "자동 선택"}`, () => {
    const calls = [];
    const result = installMcp({
      requestedClient: client,
      runner: (command, args) => {
        calls.push([command, args]);
        return { status: 0, stdout: "전체 권한 로그인 안내", stderr: "" };
      },
    });
    assert.deepEqual(calls, [["npx", ["-y", "@nerdlab-dev/meta-ads-mcp@latest", "install", ...(client ? ["--client", client] : [])]]]);
    assert.equal(result.ok, true);
    assert.match(result.message, /전체 권한 로그인 안내/);
  });
}

test("공통 설치기가 실패하면 성공으로 보고하지 않는다", () => {
  const result = installMcp({ runner: () => ({ status: 7, stdout: "", stderr: "패키지 설치 실패" }) });
  assert.equal(result.ok, false);
  assert.match(result.message, /패키지 설치 실패/);
});

test("npx를 실행할 수 없을 때 오류를 보여준다", () => {
  const result = installMcp({ runner: () => ({ status: null, error: new Error("npx ENOENT") }) });
  assert.equal(result.ok, false);
  assert.match(result.message, /npx ENOENT/);
});

test("지원하지 않는 클라이언트는 실행 전에 거부한다", () => {
  const result = installMcp({ requestedClient: "unknown", runner: () => assert.fail("실행하면 안 됩니다") });
  assert.equal(result.ok, false);
});
